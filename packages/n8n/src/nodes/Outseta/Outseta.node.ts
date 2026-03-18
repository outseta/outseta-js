import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	IDataObject,
} from 'n8n-workflow';
import { createClient } from '@outseta/api-client';
import type { KyInstance } from 'ky';

export class Outseta implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Outseta',
		name: 'outseta',
		icon: 'file:outseta.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Outseta REST API',
		defaults: {
			name: 'Outseta',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'outsetaApi',
				required: true,
			},
		],
		properties: [
			// ------ Resource ------
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Account', value: 'account' },
					{ name: 'Person', value: 'person' },
					{ name: 'Plan', value: 'plan' },
					{ name: 'Plan Family', value: 'planFamily' },
					{ name: 'Subscription', value: 'subscription' },
					{ name: 'Email List', value: 'emailList' },
				],
				default: 'account',
			},

			// ------ Operations per resource ------

			// Account operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['account'] } },
				options: [
					{ name: 'Get Many', value: 'getMany', description: 'Get many accounts', action: 'Get many accounts' },
					{ name: 'Register', value: 'register', description: 'Register a new account (person + account + subscription)', action: 'Register an account' },
					{ name: 'Add Person', value: 'addPerson', description: 'Add an existing person to an account', action: 'Add person to account' },
				],
				default: 'getMany',
			},

			// Person operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['person'] } },
				options: [
					{ name: 'Get Many', value: 'getMany', description: 'Get many people', action: 'Get many people' },
					{ name: 'Create', value: 'create', description: 'Create a person', action: 'Create a person' },
				],
				default: 'getMany',
			},

			// Plan operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['plan'] } },
				options: [
					{ name: 'Get Many', value: 'getMany', description: 'Get many plans', action: 'Get many plans' },
					{ name: 'Create', value: 'create', description: 'Create a plan', action: 'Create a plan' },
				],
				default: 'getMany',
			},

			// Plan Family operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['planFamily'] } },
				options: [
					{ name: 'Get Many', value: 'getMany', description: 'Get many plan families', action: 'Get many plan families' },
					{ name: 'Create', value: 'create', description: 'Create a plan family', action: 'Create a plan family' },
				],
				default: 'getMany',
			},

			// Subscription operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['subscription'] } },
				options: [
					{ name: 'Preview Change', value: 'previewChange', description: 'Preview a subscription plan change', action: 'Preview subscription change' },
					{ name: 'Change', value: 'change', description: 'Change a subscription plan', action: 'Change subscription' },
				],
				default: 'previewChange',
			},

			// Email List operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['emailList'] } },
				options: [
					{ name: 'Get Many', value: 'getMany', description: 'Get many email lists', action: 'Get many email lists' },
					{ name: 'Create', value: 'create', description: 'Create an email list', action: 'Create an email list' },
					{ name: 'Get Subscribers', value: 'getSubscribers', description: 'Get subscribers of an email list', action: 'Get email list subscribers' },
					{ name: 'Subscribe Person', value: 'subscribePerson', description: 'Subscribe a person to an email list', action: 'Subscribe person to email list' },
				],
				default: 'getMany',
			},

			// ============================
			// Shared query params (getMany)
			// ============================
			{
				displayName: 'Search Term',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search term to filter results',
				displayOptions: { show: { operation: ['getMany'] } },
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: { minValue: 1, maxValue: 100 },
				default: 25,
				description: 'Max number of results to return',
				displayOptions: { show: { operation: ['getMany'] } },
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				typeOptions: { minValue: 0 },
				default: 0,
				description: 'Page offset (0-based)',
				displayOptions: { show: { operation: ['getMany'] } },
			},
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '*,*.*',
				description: 'Fields to include in the response. Use "*" for root fields, "*,*.*" for nested objects, or specific paths like "Uid,Name,CurrentSubscription.Plan.*".',
				displayOptions: { show: { operation: ['getMany'] } },
			},
			{
				displayName: 'Order By',
				name: 'orderBy',
				type: 'string',
				default: '',
				description: 'Field to order results by (e.g. "Name", "Created")',
				displayOptions: { show: { operation: ['getMany'] } },
			},
			{
				displayName: 'Order Direction',
				name: 'orderDirection',
				type: 'options',
				options: [
					{ name: 'Ascending', value: 'ASC' },
					{ name: 'Descending', value: 'DESC' },
				],
				default: 'ASC',
				displayOptions: { show: { operation: ['getMany'] } },
			},
			{
				displayName: 'Filters',
				name: 'filters',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Filter',
				displayOptions: { show: { operation: ['getMany'] } },
				options: [
					{
						name: 'filterValues',
						displayName: 'Filter',
						values: [
							{
								displayName: 'Field',
								name: 'field',
								type: 'string',
								default: '',
								description: 'Field name to filter on',
							},
							{
								displayName: 'Operator',
								name: 'operator',
								type: 'options',
								options: [
									{ name: 'Equals', value: '' },
									{ name: 'Greater Than', value: 'gt' },
									{ name: 'Greater Than or Equal', value: 'gte' },
									{ name: 'Less Than', value: 'lt' },
									{ name: 'Less Than or Equal', value: 'lte' },
									{ name: 'Not Equal', value: 'ne' },
									{ name: 'Is Null', value: 'isnull' },
								],
								default: '',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'Value to filter by',
							},
						],
					},
				],
			},

			// ============================
			// Account: Register
			// ============================
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['account'], operation: ['register'] } },
				description: 'Email address of the person signing up',
			},
			{
				displayName: 'Plan UID',
				name: 'planUid',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['account'], operation: ['register'] } },
				description: 'The UID of the plan for the subscription',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				displayOptions: { show: { resource: ['account'], operation: ['register'] } },
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				displayOptions: { show: { resource: ['account'], operation: ['register'] } },
			},
			{
				displayName: 'Account Name',
				name: 'accountName',
				type: 'string',
				default: '',
				displayOptions: { show: { resource: ['account'], operation: ['register'] } },
			},
			{
				displayName: 'Billing Renewal Term',
				name: 'billingRenewalTerm',
				type: 'options',
				options: [
					{ name: 'Monthly', value: 1 },
					{ name: 'Annual', value: 2 },
					{ name: 'Quarterly', value: 3 },
				],
				default: 1,
				displayOptions: { show: { resource: ['account'], operation: ['register'] } },
			},

			// ============================
			// Account: Add Person
			// ============================
			{
				displayName: 'Account UID',
				name: 'accountUid',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['account'], operation: ['addPerson'] } },
				description: 'UID of the account to add the person to',
			},
			{
				displayName: 'Person UID',
				name: 'personUid',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['account'], operation: ['addPerson'] } },
				description: 'UID of the person to add',
			},
			{
				displayName: 'Is Primary',
				name: 'isPrimary',
				type: 'boolean',
				default: false,
				displayOptions: { show: { resource: ['account'], operation: ['addPerson'] } },
				description: 'Whether this person should be the primary contact',
			},
			{
				displayName: 'Send Welcome Email',
				name: 'sendWelcomeEmail',
				type: 'boolean',
				default: false,
				displayOptions: { show: { resource: ['account'], operation: ['addPerson'] } },
			},

			// ============================
			// Person: Create
			// ============================
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['person'], operation: ['create'] } },
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				displayOptions: { show: { resource: ['person'], operation: ['create'] } },
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				displayOptions: { show: { resource: ['person'], operation: ['create'] } },
			},

			// ============================
			// Plan: Create
			// ============================
			{
				displayName: 'Name',
				name: 'planName',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
				description: 'Name of the plan',
			},
			{
				displayName: 'Plan Family UID',
				name: 'planFamilyUid',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
			},
			{
				displayName: 'Is Active',
				name: 'isActive',
				type: 'boolean',
				default: true,
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
			},
			{
				displayName: 'Account Registration Mode',
				name: 'accountRegistrationMode',
				type: 'options',
				options: [
					{ name: 'Individual', value: 'Individual' },
					{ name: 'Team', value: 'Team' },
				],
				default: 'Individual',
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
			},
			{
				displayName: 'Trial Period Days',
				name: 'trialPeriodDays',
				type: 'number',
				default: 0,
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
			},
			{
				displayName: 'Monthly Rate',
				name: 'monthlyRate',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
			},
			{
				displayName: 'Annual Rate',
				name: 'annualRate',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
			},
			{
				displayName: 'Quarterly Rate',
				name: 'quarterlyRate',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
			},
			{
				displayName: 'One-Time Rate',
				name: 'oneTimeRate',
				type: 'number',
				typeOptions: { numberPrecision: 2 },
				default: 0,
				displayOptions: { show: { resource: ['plan'], operation: ['create'] } },
			},

			// ============================
			// Plan Family: Create
			// ============================
			{
				displayName: 'Name',
				name: 'planFamilyName',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['planFamily'], operation: ['create'] } },
			},
			{
				displayName: 'Is Default',
				name: 'isDefault',
				type: 'boolean',
				default: false,
				displayOptions: { show: { resource: ['planFamily'], operation: ['create'] } },
			},
			{
				displayName: 'Is Active',
				name: 'isActivePlanFamily',
				type: 'boolean',
				default: true,
				displayOptions: { show: { resource: ['planFamily'], operation: ['create'] } },
			},

			// ============================
			// Subscription: Change / Preview
			// ============================
			{
				displayName: 'Account UID',
				name: 'accountUid',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['subscription'] } },
				description: 'UID of the account whose subscription to change',
			},
			{
				displayName: 'New Plan UID',
				name: 'planUid',
				type: 'string',
				default: '',
				displayOptions: { show: { resource: ['subscription'] } },
				description: 'UID of the plan to change to (leave empty to keep current plan)',
			},
			{
				displayName: 'Billing Renewal Term',
				name: 'billingRenewalTerm',
				type: 'options',
				options: [
					{ name: 'Keep Current', value: 0 },
					{ name: 'Monthly', value: 1 },
					{ name: 'Annual', value: 2 },
					{ name: 'Quarterly', value: 3 },
				],
				default: 0,
				displayOptions: { show: { resource: ['subscription'] } },
				description: 'Billing renewal term (0 = keep current)',
			},
			{
				displayName: 'Start Immediately',
				name: 'startImmediately',
				type: 'boolean',
				default: false,
				displayOptions: { show: { resource: ['subscription'] } },
			},

			// ============================
			// Email List: Create
			// ============================
			{
				displayName: 'Name',
				name: 'emailListName',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['emailList'], operation: ['create'] } },
			},
			{
				displayName: 'Description',
				name: 'emailListDescription',
				type: 'string',
				default: '',
				displayOptions: { show: { resource: ['emailList'], operation: ['create'] } },
			},
			{
				displayName: 'Is Internal',
				name: 'isInternal',
				type: 'boolean',
				default: false,
				displayOptions: { show: { resource: ['emailList'], operation: ['create'] } },
				description: 'Internal lists do not support double opt-in or welcome emails',
			},
			{
				displayName: 'Requires Double Opt-In',
				name: 'requiresDoubleOptIn',
				type: 'boolean',
				default: true,
				displayOptions: { show: { resource: ['emailList'], operation: ['create'] } },
			},
			{
				displayName: 'Welcome Email',
				name: 'welcomeEmail',
				type: 'fixedCollection',
				default: {},
				displayOptions: { show: { resource: ['emailList'], operation: ['create'] } },
				description: 'Optional welcome email configuration (only for non-internal lists)',
				options: [
					{
						name: 'welcomeValues',
						displayName: 'Welcome Email',
						values: [
							{ displayName: 'From Name', name: 'fromName', type: 'string', default: '' },
							{ displayName: 'From Email', name: 'fromEmail', type: 'string', default: '' },
							{ displayName: 'Subject', name: 'subject', type: 'string', default: '' },
							{ displayName: 'Body (HTML)', name: 'body', type: 'string', typeOptions: { rows: 5 }, default: '' },
						],
					},
				],
			},

			// ============================
			// Email List: Get Subscribers
			// ============================
			{
				displayName: 'List UID',
				name: 'listUid',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['emailList'], operation: ['getSubscribers'] } },
			},

			// ============================
			// Email List: Subscribe Person
			// ============================
			{
				displayName: 'List UID',
				name: 'listUid',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['emailList'], operation: ['subscribePerson'] } },
			},
			{
				displayName: 'Person UID',
				name: 'personUid',
				type: 'string',
				required: true,
				default: '',
				displayOptions: { show: { resource: ['emailList'], operation: ['subscribePerson'] } },
			},
			{
				displayName: 'Send Welcome Email',
				name: 'sendWelcomeEmail',
				type: 'boolean',
				default: false,
				displayOptions: { show: { resource: ['emailList'], operation: ['subscribePerson'] } },
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const credentials = await this.getCredentials('outsetaApi');
		const client = createClient({
			subdomain: credentials.subdomain as string,
			apiKey: credentials.apiKey as string,
			apiSecret: credentials.apiSecret as string,
		});

		for (let i = 0; i < items.length; i++) {
			try {
				const resource = this.getNodeParameter('resource', i) as string;
				const operation = this.getNodeParameter('operation', i) as string;

				let responseData: IDataObject | IDataObject[];

				// ---- Account ----
				if (resource === 'account') {
					if (operation === 'getMany') {
						responseData = await makeListRequest(client, this, i, 'crm/accounts');
					} else if (operation === 'register') {
						const body: IDataObject = {
							Name: (this.getNodeParameter('accountName', i, '') as string) || undefined,
							Subscriptions: [
								{
									BillingRenewalTerm: this.getNodeParameter('billingRenewalTerm', i) as number,
									Plan: { Uid: this.getNodeParameter('planUid', i) as string },
								},
							],
							PersonAccount: [
								{
									IsPrimary: true,
									Person: {
										Email: this.getNodeParameter('email', i) as string,
										FirstName: (this.getNodeParameter('firstName', i, '') as string) || undefined,
										LastName: (this.getNodeParameter('lastName', i, '') as string) || undefined,
									},
								},
							],
						};
						responseData = await request(client, 'post', 'crm/registrations', body);
					} else if (operation === 'addPerson') {
						const accountUid = this.getNodeParameter('accountUid', i) as string;
						const body: IDataObject = {
							Account: { Uid: accountUid },
							Person: { Uid: this.getNodeParameter('personUid', i) as string },
							IsPrimary: this.getNodeParameter('isPrimary', i) as boolean,
						};
						const searchParams = {
							sendWelcomeEmail: String(this.getNodeParameter('sendWelcomeEmail', i) as boolean),
						};
						responseData = await request(client, 'post', `crm/accounts/${accountUid}/memberships`, body, searchParams);
					} else {
						throw new Error(`Unknown operation: ${operation}`);
					}
				}

				// ---- Person ----
				else if (resource === 'person') {
					if (operation === 'getMany') {
						responseData = await makeListRequest(client, this, i, 'crm/people');
					} else if (operation === 'create') {
						const body: IDataObject = {
							Email: this.getNodeParameter('email', i) as string,
							FirstName: (this.getNodeParameter('firstName', i, '') as string) || undefined,
							LastName: (this.getNodeParameter('lastName', i, '') as string) || undefined,
						};
						responseData = await request(client, 'post', 'crm/people', body);
					} else {
						throw new Error(`Unknown operation: ${operation}`);
					}
				}

				// ---- Plan ----
				else if (resource === 'plan') {
					if (operation === 'getMany') {
						responseData = await makeListRequest(client, this, i, 'billing/plans');
					} else if (operation === 'create') {
						const body: IDataObject = {
							Name: this.getNodeParameter('planName', i) as string,
							PlanFamily: { Uid: this.getNodeParameter('planFamilyUid', i) as string },
							IsActive: this.getNodeParameter('isActive', i) as boolean,
							AccountRegistrationMode: this.getNodeParameter('accountRegistrationMode', i) as string,
							TrialPeriodDays: (this.getNodeParameter('trialPeriodDays', i, 0) as number) || undefined,
							MonthlyRate: (this.getNodeParameter('monthlyRate', i, 0) as number) || undefined,
							AnnualRate: (this.getNodeParameter('annualRate', i, 0) as number) || undefined,
							QuarterlyRate: (this.getNodeParameter('quarterlyRate', i, 0) as number) || undefined,
							OneTimeRate: (this.getNodeParameter('oneTimeRate', i, 0) as number) || undefined,
						};
						responseData = await request(client, 'post', 'billing/plans', body);
					} else {
						throw new Error(`Unknown operation: ${operation}`);
					}
				}

				// ---- Plan Family ----
				else if (resource === 'planFamily') {
					if (operation === 'getMany') {
						responseData = await makeListRequest(client, this, i, 'billing/planfamilies');
					} else if (operation === 'create') {
						const body: IDataObject = {
							Name: this.getNodeParameter('planFamilyName', i) as string,
							IsDefault: this.getNodeParameter('isDefault', i) as boolean,
							IsActive: this.getNodeParameter('isActivePlanFamily', i) as boolean,
						};
						responseData = await request(client, 'post', 'billing/planfamilies', body);
					} else {
						throw new Error(`Unknown operation: ${operation}`);
					}
				}

				// ---- Subscription ----
				else if (resource === 'subscription') {
					const accountUid = this.getNodeParameter('accountUid', i) as string;

					const accountData = await request(client, 'get', `crm/accounts/${accountUid}`, undefined, {
						fields: 'Uid,Name,CurrentSubscription.*',
					});

					const currentSubscription = accountData.CurrentSubscription as IDataObject | undefined;
					if (!currentSubscription) {
						throw new Error(`Account ${accountUid} does not have an active subscription`);
					}

					const billingRenewalTerm = this.getNodeParameter('billingRenewalTerm', i) as number;
					const planUid = this.getNodeParameter('planUid', i, '') as string;

					const body: IDataObject = {
						Plan: { Uid: planUid || (currentSubscription.Plan as IDataObject)?.Uid },
						BillingRenewalTerm: billingRenewalTerm || currentSubscription.BillingRenewalTerm,
						Account: { Uid: accountUid },
					};
					const searchParams = {
						startImmediately: String(this.getNodeParameter('startImmediately', i) as boolean),
					};

					const subUid = currentSubscription.Uid as string;
					const endpoint = operation === 'previewChange'
						? `billing/subscriptions/${subUid}/changesubscriptionpreview`
						: `billing/subscriptions/${subUid}/changeSubscription`;

					responseData = await request(client, 'put', endpoint, body, searchParams);
				}

				// ---- Email List ----
				else if (resource === 'emailList') {
					if (operation === 'getMany') {
						responseData = await makeListRequest(client, this, i, 'email/lists');
					} else if (operation === 'create') {
						const body: IDataObject = {
							Name: this.getNodeParameter('emailListName', i) as string,
							Description: (this.getNodeParameter('emailListDescription', i, '') as string) || undefined,
							IsInternal: this.getNodeParameter('isInternal', i) as boolean,
							RequiresDoubleOptIn: this.getNodeParameter('requiresDoubleOptIn', i) as boolean,
						};

						const welcomeEmail = this.getNodeParameter('welcomeEmail', i, {}) as IDataObject;
						const welcomeValues = (welcomeEmail.welcomeValues as IDataObject) ?? {};
						if (welcomeValues.fromName) {
							body.WelcomeFromName = welcomeValues.fromName;
							body.WelcomeFromEmail = welcomeValues.fromEmail;
							body.WelcomeSubject = welcomeValues.subject;
							body.WelcomeBody = welcomeValues.body;
						}

						responseData = await request(client, 'post', 'email/lists', body);
					} else if (operation === 'getSubscribers') {
						const listUid = this.getNodeParameter('listUid', i) as string;
						responseData = await request(client, 'get', `email/lists/${listUid}/subscriptions`);
					} else if (operation === 'subscribePerson') {
						const listUid = this.getNodeParameter('listUid', i) as string;
						const body: IDataObject = {
							EmailList: { Uid: listUid },
							Person: { Uid: this.getNodeParameter('personUid', i) as string },
							SendWelcomeEmail: this.getNodeParameter('sendWelcomeEmail', i) as boolean,
						};
						responseData = await request(client, 'post', `email/lists/${listUid}/subscriptions`, body);
					} else {
						throw new Error(`Unknown operation: ${operation}`);
					}
				} else {
					throw new Error(`Unknown resource: ${resource}`);
				}

				// Normalize output
				if (Array.isArray(responseData)) {
					returnData.push(...responseData.map((item) => ({ json: item })));
				} else {
					returnData.push({ json: responseData as IDataObject });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error).message },
						pairedItem: { item: i },
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}

// ---- Helper functions ----

async function request(
	client: KyInstance,
	method: 'get' | 'post' | 'put',
	endpoint: string,
	body?: IDataObject,
	searchParams?: Record<string, string>,
): Promise<IDataObject> {
	const options: Record<string, unknown> = {};
	if (body) options.json = body;
	if (searchParams) options.searchParams = searchParams;

	return await client[method](endpoint, options).json<IDataObject>();
}

async function makeListRequest(
	client: KyInstance,
	ctx: IExecuteFunctions,
	itemIndex: number,
	endpoint: string,
): Promise<IDataObject> {
	const searchParams: Record<string, string> = {};

	const q = ctx.getNodeParameter('q', itemIndex, '') as string;
	if (q) searchParams.q = q;

	const limit = ctx.getNodeParameter('limit', itemIndex, 25) as number;
	searchParams.limit = String(limit);

	const offset = ctx.getNodeParameter('offset', itemIndex, 0) as number;
	searchParams.offset = String(offset);

	const fields = ctx.getNodeParameter('fields', itemIndex, '*,*.*') as string;
	if (fields) searchParams.fields = fields;

	const orderBy = ctx.getNodeParameter('orderBy', itemIndex, '') as string;
	const orderDirection = ctx.getNodeParameter('orderDirection', itemIndex, 'ASC') as string;
	if (orderBy) {
		searchParams.orderBy = `${orderBy}+${orderDirection}`;
	}

	// Process filters
	const filtersData = ctx.getNodeParameter('filters', itemIndex, {}) as IDataObject;
	const filterValues = (filtersData.filterValues as IDataObject[]) ?? [];
	for (const filter of filterValues) {
		const field = filter.field as string;
		const operator = filter.operator as string;
		const value = filter.value as string;
		const paramKey = operator ? `${field}__${operator}` : field;
		searchParams[paramKey] = value;
	}

	return await request(client, 'get', endpoint, undefined, searchParams);
}

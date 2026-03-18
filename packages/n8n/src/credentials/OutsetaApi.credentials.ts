import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OutsetaApi implements ICredentialType {
	name = 'outsetaApi';
	displayName = 'Outseta API';
	documentationUrl = 'https://documenter.getpostman.com/view/3613332/outseta-rest-api-v1/7TNfr6p';

	properties: INodeProperties[] = [
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			default: '',
			placeholder: 'mycompany',
			description: 'Your Outseta subdomain (e.g. "mycompany" from mycompany.outseta.com)',
			required: true,
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
		{
			displayName: 'API Secret',
			name: 'apiSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Outseta {{$credentials.apiKey}}:{{$credentials.apiSecret}}',
			},
		},
	};
}

// @ts-nocheck

/**
 * `1` - UpdateSegmentBackGroundTask, `2` - ImportPeopleTask, `3` - ImportAccountTask, `4` - ImportDealTask, `5` - ImportEmailList, `6` - RescheduleDripCampaignTask, `7` - DeleteSegmentPeopleTask, `8` - StartDripCampaignTask, `9` - WebflowSyncTask, `10` - UpdatePersonSegmentsTask, `11` - ImportDiscountCouponTask, `12` - RemoveDiscordUserFromAllServersTask, `13` - SendInvoiceEmailTask, `14` - UpdateDiscordUserRolesTask, `15` - StripeBillingSyncTask, `16` - UpdateStripeDefaultSourceTask, `17` - DeleteScheduledCampaignMessagesTask, `18` - SendSpamCheckEmailTask, `19` - UpdateDiscordMemberRolesTask, `20` - SendInvoicePaidEmailTask, `21` - ResendTrialLimitEmailTask
 */
export type BackGroundTaskType = typeof BackGroundTaskType[keyof typeof BackGroundTaskType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BackGroundTaskType = {
  UpdateSegmentBackGroundTask: 1,
  ImportPeopleTask: 2,
  ImportAccountTask: 3,
  ImportDealTask: 4,
  ImportEmailList: 5,
  RescheduleDripCampaignTask: 6,
  DeleteSegmentPeopleTask: 7,
  StartDripCampaignTask: 8,
  WebflowSyncTask: 9,
  UpdatePersonSegmentsTask: 10,
  ImportDiscountCouponTask: 11,
  RemoveDiscordUserFromAllServersTask: 12,
  SendInvoiceEmailTask: 13,
  UpdateDiscordUserRolesTask: 14,
  StripeBillingSyncTask: 15,
  UpdateStripeDefaultSourceTask: 16,
  DeleteScheduledCampaignMessagesTask: 17,
  SendSpamCheckEmailTask: 18,
  UpdateDiscordMemberRolesTask: 19,
  SendInvoicePaidEmailTask: 20,
  ResendTrialLimitEmailTask: 21,
} as const;

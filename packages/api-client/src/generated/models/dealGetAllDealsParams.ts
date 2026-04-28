// @ts-nocheck

export type DealGetAllDealsParams = {
/**
 * Uid of the owner of the deal, or -1 for unassigned deals and -2 for all assigned deals.
 * @nullable
 */
ownerUid?: string | null;
/**
 * Match on the deal name, the pipeline stage name, or the account name.
 * @nullable
 */
q?: string | null;
};

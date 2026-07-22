// @ts-nocheck
import type { SequenceFreeze } from './sequenceFreeze';
import type { SequenceVersion } from './sequenceVersion';

export interface SequenceState {
  /** @nullable */
  Freezes?: SequenceFreeze[] | null;
  /** @nullable */
  Versions?: SequenceVersion[] | null;
}

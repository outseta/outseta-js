// @ts-nocheck
import type { SequenceVersionMessage } from './sequenceVersionMessage';

export interface SequenceVersion {
  EffectiveFrom?: string;
  /** @nullable */
  Messages?: SequenceVersionMessage[] | null;
  /** @nullable */
  CreatedByUserId?: number | null;
}

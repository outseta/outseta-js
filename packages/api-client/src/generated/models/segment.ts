// @ts-nocheck
import type { AbstractQcountBean } from './abstractQcountBean';
import type { SegmentAllOf } from './segmentAllOf';

export type Segment = AbstractQcountBean & SegmentAllOf & Required<Pick<AbstractQcountBean & SegmentAllOf, 'ContainsDailyRepopulationConditions'>>;

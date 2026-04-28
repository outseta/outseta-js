// @ts-nocheck
import type { AbstractBean } from './abstractBean';
import type { QcountAllOf } from './qcountAllOf';

export type Qcount = AbstractBean & QcountAllOf & Required<Pick<AbstractBean & QcountAllOf, 'Database'>>;

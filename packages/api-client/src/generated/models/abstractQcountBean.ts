// @ts-nocheck
import type { AbstractBean } from './abstractBean';
import type { AbstractQcountBeanAllOf } from './abstractQcountBeanAllOf';

export type AbstractQcountBean = AbstractBean & AbstractQcountBeanAllOf & Required<Pick<AbstractBean & AbstractQcountBeanAllOf, 'Qcount_Id'>>;

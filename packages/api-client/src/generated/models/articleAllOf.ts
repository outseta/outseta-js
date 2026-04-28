// @ts-nocheck
import type { SupportArticleStatus } from './supportArticleStatus';
import type { ArticleAllOfCategory } from './articleAllOfCategory';

export type ArticleAllOf = {
  Weight?: number;
  /**
   * @maxLength 255
   * @nullable
   */
  Title?: string | null;
  /** @nullable */
  Body?: string | null;
  /**
   * @minimum 1
   * @maximum 3
   */
  SupportArticleStatus?: SupportArticleStatus;
  /** @nullable */
  Category?: ArticleAllOfCategory;
  /**
   * @maxLength 255
   * @nullable
   */
  Keywords?: string | null;
};

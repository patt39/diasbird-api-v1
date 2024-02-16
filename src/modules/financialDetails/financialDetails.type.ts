import { FinancialDetail } from '@prisma/client';
import { PaginationType } from '../../app/utils/pagination/with-pagination';

export type GetFinancialDetailsSelections = {
  search?: string;
  organizationId: string;
  pagination?: PaginationType;
};

export type GetOneFinancialDetailsSelections = {
  name?: FinancialDetail['name'];
  financialDetailId?: FinancialDetail['id'];
  organizationId?: FinancialDetail['organizationId'];
};

export type UpdateFinancialDetailsSelections = {
  financialDetailId: FinancialDetail['id'];
};

export type CreateFinancialDetailsOptions = Partial<FinancialDetail>;

export type UpdateFinancialDetailsOptions = Partial<FinancialDetail>;

export const FinancialDetailsSelect = {
  createdAt: true,
  id: true,
  name: true,
  organizationId: true,
};

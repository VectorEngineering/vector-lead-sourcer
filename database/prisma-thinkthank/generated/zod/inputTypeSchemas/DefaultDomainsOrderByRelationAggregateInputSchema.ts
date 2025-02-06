import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DefaultDomainsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DefaultDomainsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DefaultDomainsOrderByRelationAggregateInputSchema;

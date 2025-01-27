import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadCategoryOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadCategoryOrderByRelationAggregateInputSchema

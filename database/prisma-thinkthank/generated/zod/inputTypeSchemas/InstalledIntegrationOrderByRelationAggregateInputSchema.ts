import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InstalledIntegrationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InstalledIntegrationOrderByRelationAggregateInput> =
    z
        .object({
            _count: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default InstalledIntegrationOrderByRelationAggregateInputSchema

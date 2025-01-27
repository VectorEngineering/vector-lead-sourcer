import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema'
import { NestedEnumLeadVerificationStatusWithAggregatesFilterSchema } from './NestedEnumLeadVerificationStatusWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumLeadVerificationStatusFilterSchema } from './NestedEnumLeadVerificationStatusFilterSchema'

export const EnumLeadVerificationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeadVerificationStatusWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => LeadVerificationStatusSchema).optional(),
        in: z
            .lazy(() => LeadVerificationStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => LeadVerificationStatusSchema)
            .array()
            .optional(),
        not: z
            .union([z.lazy(() => LeadVerificationStatusSchema), z.lazy(() => NestedEnumLeadVerificationStatusWithAggregatesFilterSchema)])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumLeadVerificationStatusFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumLeadVerificationStatusFilterSchema).optional()
    })
    .strict()

export default EnumLeadVerificationStatusWithAggregatesFilterSchema

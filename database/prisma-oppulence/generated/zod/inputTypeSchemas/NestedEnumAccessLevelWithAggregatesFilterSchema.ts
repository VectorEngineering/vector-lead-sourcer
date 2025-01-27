import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessLevelSchema } from './AccessLevelSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumAccessLevelFilterSchema } from './NestedEnumAccessLevelFilterSchema'

export const NestedEnumAccessLevelWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAccessLevelWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => AccessLevelSchema).optional(),
        in: z
            .lazy(() => AccessLevelSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => AccessLevelSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => AccessLevelSchema), z.lazy(() => NestedEnumAccessLevelWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumAccessLevelFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumAccessLevelFilterSchema).optional()
    })
    .strict()

export default NestedEnumAccessLevelWithAggregatesFilterSchema

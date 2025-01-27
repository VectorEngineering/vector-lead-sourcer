import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccountSubTypeSchema } from './AccountSubTypeSchema'
import { NestedEnumAccountSubTypeNullableWithAggregatesFilterSchema } from './NestedEnumAccountSubTypeNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumAccountSubTypeNullableFilterSchema } from './NestedEnumAccountSubTypeNullableFilterSchema'

export const EnumAccountSubTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAccountSubTypeNullableWithAggregatesFilter> = z
    .object({
        equals: z
            .lazy(() => AccountSubTypeSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => AccountSubTypeSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => AccountSubTypeSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => AccountSubTypeSchema), z.lazy(() => NestedEnumAccountSubTypeNullableWithAggregatesFilterSchema)])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumAccountSubTypeNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumAccountSubTypeNullableFilterSchema).optional()
    })
    .strict()

export default EnumAccountSubTypeNullableWithAggregatesFilterSchema

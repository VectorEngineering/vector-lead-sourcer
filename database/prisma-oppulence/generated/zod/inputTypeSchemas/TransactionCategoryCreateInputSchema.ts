import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { ProjectCreateNestedOneWithoutTransactionCategoryInputSchema } from './ProjectCreateNestedOneWithoutTransactionCategoryInputSchema'

export const TransactionCategoryCreateInputSchema: z.ZodType<Prisma.TransactionCategoryCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        slug: z.string(),
        description: z.string().optional().nullable(),
        color: z.string().optional().nullable(),
        icon: z.string().optional().nullable(),
        parentId: z.string().optional().nullable(),
        path: z.string().optional().nullable(),
        level: z.number().int().optional(),
        isSystem: z.boolean().optional(),
        isActive: z.boolean().optional(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        budgetLimit: z.number().optional().nullable(),
        warningThreshold: z.number().optional().nullable(),
        trackingEnabled: z.boolean().optional(),
        vatRate: z.number().optional().nullable(),
        taxCode: z.string().optional().nullable(),
        taxDeductible: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutTransactionCategoryInputSchema)
    })
    .strict()

export default TransactionCategoryCreateInputSchema

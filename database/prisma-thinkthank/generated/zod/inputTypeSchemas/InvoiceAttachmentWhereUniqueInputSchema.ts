import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceAttachmentWhereInputSchema } from './InvoiceAttachmentWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { InvoiceRelationFilterSchema } from './InvoiceRelationFilterSchema'
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema'

export const InvoiceAttachmentWhereUniqueInputSchema: z.ZodType<Prisma.InvoiceAttachmentWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => InvoiceAttachmentWhereInputSchema), z.lazy(() => InvoiceAttachmentWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => InvoiceAttachmentWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => InvoiceAttachmentWhereInputSchema), z.lazy(() => InvoiceAttachmentWhereInputSchema).array()])
                    .optional(),
                invoiceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                description: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                type: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                path: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                size: z
                    .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
                    .optional()
                    .nullable(),
                mimeType: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                createdBy: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                invoice: z.union([z.lazy(() => InvoiceRelationFilterSchema), z.lazy(() => InvoiceWhereInputSchema)]).optional()
            })
            .strict()
    )

export default InvoiceAttachmentWhereUniqueInputSchema

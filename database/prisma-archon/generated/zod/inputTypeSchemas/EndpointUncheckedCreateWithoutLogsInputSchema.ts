import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { LeadUncheckedCreateNestedManyWithoutEndpointInputSchema } from './LeadUncheckedCreateNestedManyWithoutEndpointInputSchema'

export const EndpointUncheckedCreateWithoutLogsInputSchema: z.ZodType<Prisma.EndpointUncheckedCreateWithoutLogsInput> = z
    .object({
        id: z.string().cuid().optional(),
        userId: z.string(),
        name: z.string(),
        schema: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        enabled: z.boolean().optional(),
        webhookEnabled: z.boolean().optional(),
        emailNotify: z.boolean().optional(),
        webhook: z.string().optional().nullable(),
        formEnabled: z.boolean().optional(),
        successUrl: z.string().optional().nullable(),
        failUrl: z.string().optional().nullable(),
        token: z.string().optional().nullable(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date(),
        leads: z.lazy(() => LeadUncheckedCreateNestedManyWithoutEndpointInputSchema).optional()
    })
    .strict()

export default EndpointUncheckedCreateWithoutLogsInputSchema

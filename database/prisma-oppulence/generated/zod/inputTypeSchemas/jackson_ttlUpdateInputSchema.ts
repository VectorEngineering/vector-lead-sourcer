import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { BigIntFieldUpdateOperationsInputSchema } from './BigIntFieldUpdateOperationsInputSchema'

export const jackson_ttlUpdateInputSchema: z.ZodType<Prisma.jackson_ttlUpdateInput> = z
    .object({
        key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        expiresAt: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default jackson_ttlUpdateInputSchema

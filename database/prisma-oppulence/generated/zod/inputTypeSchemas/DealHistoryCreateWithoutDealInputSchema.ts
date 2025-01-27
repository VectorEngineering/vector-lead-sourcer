import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const DealHistoryCreateWithoutDealInputSchema: z.ZodType<Prisma.DealHistoryCreateWithoutDealInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        oldValue: z.string().optional().nullable(),
        newValue: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable()
    })
    .strict()

export default DealHistoryCreateWithoutDealInputSchema

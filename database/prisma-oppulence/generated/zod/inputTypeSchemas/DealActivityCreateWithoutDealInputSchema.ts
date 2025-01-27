import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealActivityTypeSchema } from './DealActivityTypeSchema'

export const DealActivityCreateWithoutDealInputSchema: z.ZodType<Prisma.DealActivityCreateWithoutDealInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z.lazy(() => DealActivityTypeSchema),
        title: z.string(),
        description: z.string().optional().nullable(),
        outcome: z.string().optional().nullable(),
        duration: z.number().int().optional().nullable(),
        scheduledAt: z.coerce.date().optional().nullable(),
        completedAt: z.coerce.date().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable()
    })
    .strict()

export default DealActivityCreateWithoutDealInputSchema

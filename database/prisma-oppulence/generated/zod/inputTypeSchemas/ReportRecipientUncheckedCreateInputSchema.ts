import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ReportRecipientUncheckedCreateInputSchema: z.ZodType<Prisma.ReportRecipientUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        reportId: z.string(),
        email: z.string(),
        name: z.string().optional().nullable(),
        type: z.string(),
        isActive: z.boolean().optional()
    })
    .strict()

export default ReportRecipientUncheckedCreateInputSchema

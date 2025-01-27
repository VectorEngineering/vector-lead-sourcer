import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardCreateWithoutLinkInputSchema } from './DashboardCreateWithoutLinkInputSchema'
import { DashboardUncheckedCreateWithoutLinkInputSchema } from './DashboardUncheckedCreateWithoutLinkInputSchema'
import { DashboardCreateOrConnectWithoutLinkInputSchema } from './DashboardCreateOrConnectWithoutLinkInputSchema'
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema'

export const DashboardCreateNestedOneWithoutLinkInputSchema: z.ZodType<Prisma.DashboardCreateNestedOneWithoutLinkInput> = z
    .object({
        create: z
            .union([z.lazy(() => DashboardCreateWithoutLinkInputSchema), z.lazy(() => DashboardUncheckedCreateWithoutLinkInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => DashboardCreateOrConnectWithoutLinkInputSchema).optional(),
        connect: z.lazy(() => DashboardWhereUniqueInputSchema).optional()
    })
    .strict()

export default DashboardCreateNestedOneWithoutLinkInputSchema

import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const AccessRuleConditionUncheckedUpdateWithoutRuleInputSchema: z.ZodType<Prisma.AccessRuleConditionUncheckedUpdateWithoutRuleInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            field: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            operator: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
        })
        .strict()

export default AccessRuleConditionUncheckedUpdateWithoutRuleInputSchema

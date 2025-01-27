import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { WebhookReceiverSchema } from './WebhookReceiverSchema'
import { EnumWebhookReceiverFieldUpdateOperationsInputSchema } from './EnumWebhookReceiverFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { WebhookStatusSchema } from './WebhookStatusSchema'
import { EnumWebhookStatusFieldUpdateOperationsInputSchema } from './EnumWebhookStatusFieldUpdateOperationsInputSchema'
import { LinkWebhookUncheckedUpdateManyWithoutWebhookNestedInputSchema } from './LinkWebhookUncheckedUpdateManyWithoutWebhookNestedInputSchema'
import { WebhookLogUncheckedUpdateManyWithoutWebhookNestedInputSchema } from './WebhookLogUncheckedUpdateManyWithoutWebhookNestedInputSchema'

export const WebhookUncheckedUpdateWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.WebhookUncheckedUpdateWithoutBankConnectionSettingsInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            projectId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            installationId: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            receiver: z
                .union([z.lazy(() => WebhookReceiverSchema), z.lazy(() => EnumWebhookReceiverFieldUpdateOperationsInputSchema)])
                .optional(),
            name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            triggers: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            consecutiveFailures: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
            lastFailedAt: z
                .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            disabledAt: z
                .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            maxRetries: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
            lastErrorMessage: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            timeout: z
                .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            status: z
                .union([z.lazy(() => WebhookStatusSchema), z.lazy(() => EnumWebhookStatusFieldUpdateOperationsInputSchema)])
                .optional(),
            verificationToken: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            ipWhitelist: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            rateLimitPerMinute: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
            links: z.lazy(() => LinkWebhookUncheckedUpdateManyWithoutWebhookNestedInputSchema).optional(),
            logs: z.lazy(() => WebhookLogUncheckedUpdateManyWithoutWebhookNestedInputSchema).optional()
        })
        .strict()

export default WebhookUncheckedUpdateWithoutBankConnectionSettingsInputSchema

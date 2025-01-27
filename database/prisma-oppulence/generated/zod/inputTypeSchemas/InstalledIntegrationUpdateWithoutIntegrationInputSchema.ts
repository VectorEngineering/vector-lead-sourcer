import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema } from './UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema'
import { ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema'
import { OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema } from './OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema'
import { RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema } from './RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema'
import { WebhookUpdateOneWithoutInstalledIntegrationNestedInputSchema } from './WebhookUpdateOneWithoutInstalledIntegrationNestedInputSchema'

export const InstalledIntegrationUpdateWithoutIntegrationInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateWithoutIntegrationInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            credentials: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            user: z.lazy(() => UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema).optional(),
            project: z.lazy(() => ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema).optional(),
            refreshTokens: z.lazy(() => OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema).optional(),
            accessTokens: z.lazy(() => RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema).optional(),
            webhook: z.lazy(() => WebhookUpdateOneWithoutInstalledIntegrationNestedInputSchema).optional()
        })
        .strict()

export default InstalledIntegrationUpdateWithoutIntegrationInputSchema

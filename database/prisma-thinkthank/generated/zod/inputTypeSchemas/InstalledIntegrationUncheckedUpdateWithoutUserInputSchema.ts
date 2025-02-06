import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { OAuthRefreshTokenUncheckedUpdateManyWithoutInstalledIntegrationNestedInputSchema } from './OAuthRefreshTokenUncheckedUpdateManyWithoutInstalledIntegrationNestedInputSchema';
import { RestrictedTokenUncheckedUpdateManyWithoutInstalledIntegrationNestedInputSchema } from './RestrictedTokenUncheckedUpdateManyWithoutInstalledIntegrationNestedInputSchema';
import { WebhookUncheckedUpdateOneWithoutInstalledIntegrationNestedInputSchema } from './WebhookUncheckedUpdateOneWithoutInstalledIntegrationNestedInputSchema';

export const InstalledIntegrationUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.InstalledIntegrationUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  integrationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  credentials: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  refreshTokens: z.lazy(() => OAuthRefreshTokenUncheckedUpdateManyWithoutInstalledIntegrationNestedInputSchema).optional(),
  accessTokens: z.lazy(() => RestrictedTokenUncheckedUpdateManyWithoutInstalledIntegrationNestedInputSchema).optional(),
  webhook: z.lazy(() => WebhookUncheckedUpdateOneWithoutInstalledIntegrationNestedInputSchema).optional()
}).strict();

export default InstalledIntegrationUncheckedUpdateWithoutUserInputSchema;

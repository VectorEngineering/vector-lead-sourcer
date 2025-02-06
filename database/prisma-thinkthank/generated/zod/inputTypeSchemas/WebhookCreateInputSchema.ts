import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookReceiverSchema } from './WebhookReceiverSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WebhookStatusSchema } from './WebhookStatusSchema';
import { ProjectCreateNestedOneWithoutWebhooksInputSchema } from './ProjectCreateNestedOneWithoutWebhooksInputSchema';
import { InstalledIntegrationCreateNestedOneWithoutWebhookInputSchema } from './InstalledIntegrationCreateNestedOneWithoutWebhookInputSchema';
import { LinkWebhookCreateNestedManyWithoutWebhookInputSchema } from './LinkWebhookCreateNestedManyWithoutWebhookInputSchema';
import { WebhookLogCreateNestedManyWithoutWebhookInputSchema } from './WebhookLogCreateNestedManyWithoutWebhookInputSchema';
import { BankConnectionSettingsCreateNestedManyWithoutWebhooksInputSchema } from './BankConnectionSettingsCreateNestedManyWithoutWebhooksInputSchema';

export const WebhookCreateInputSchema: z.ZodType<Prisma.WebhookCreateInput> = z.object({
  id: z.string().cuid().optional(),
  receiver: z.lazy(() => WebhookReceiverSchema).optional(),
  name: z.string(),
  url: z.string(),
  secret: z.string(),
  triggers: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  consecutiveFailures: z.number().int().optional(),
  lastFailedAt: z.coerce.date().optional().nullable(),
  disabledAt: z.coerce.date().optional().nullable(),
  maxRetries: z.number().int().optional(),
  lastErrorMessage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  timeout: z.number().int().optional().nullable(),
  status: z.lazy(() => WebhookStatusSchema).optional(),
  verificationToken: z.string().optional().nullable(),
  ipWhitelist: z.string().optional().nullable(),
  rateLimitPerMinute: z.number().int().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutWebhooksInputSchema),
  installedIntegration: z.lazy(() => InstalledIntegrationCreateNestedOneWithoutWebhookInputSchema).optional(),
  links: z.lazy(() => LinkWebhookCreateNestedManyWithoutWebhookInputSchema).optional(),
  logs: z.lazy(() => WebhookLogCreateNestedManyWithoutWebhookInputSchema).optional(),
  bankConnectionSettings: z.lazy(() => BankConnectionSettingsCreateNestedManyWithoutWebhooksInputSchema).optional()
}).strict();

export default WebhookCreateInputSchema;

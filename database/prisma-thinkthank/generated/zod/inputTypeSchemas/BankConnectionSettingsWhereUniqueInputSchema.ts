import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsWhereInputSchema } from './BankConnectionSettingsWhereInputSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumSyncFrequencyFilterSchema } from './EnumSyncFrequencyFilterSchema';
import { SyncFrequencySchema } from './SyncFrequencySchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumConnectionStatusFilterSchema } from './EnumConnectionStatusFilterSchema';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { WebhookListRelationFilterSchema } from './WebhookListRelationFilterSchema';
import { BankConnectionRelationFilterSchema } from './BankConnectionRelationFilterSchema';
import { BankConnectionWhereInputSchema } from './BankConnectionWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const BankConnectionSettingsWhereUniqueInputSchema: z.ZodType<Prisma.BankConnectionSettingsWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    bankConnectionId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    bankConnectionId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  bankConnectionId: z.string().optional(),
  AND: z.union([ z.lazy(() => BankConnectionSettingsWhereInputSchema),z.lazy(() => BankConnectionSettingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BankConnectionSettingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BankConnectionSettingsWhereInputSchema),z.lazy(() => BankConnectionSettingsWhereInputSchema).array() ]).optional(),
  syncEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  syncStartTime: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  syncDayOfWeek: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  syncDayOfMonth: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  syncFrequency: z.union([ z.lazy(() => EnumSyncFrequencyFilterSchema),z.lazy(() => SyncFrequencySchema) ]).optional(),
  connectionTimeout: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  readTimeout: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  maxRequestsPerHour: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  maxConcurrentRequests: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  syncTransactions: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  syncBalances: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  syncStatements: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  syncIdentity: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  syncCategories: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  syncMerchants: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  syncAttachments: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  historicalDays: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  refreshTokenEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  autoReconnectEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  connectionStatus: z.union([ z.lazy(() => EnumConnectionStatusFilterSchema),z.lazy(() => ConnectionStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantEnrichmentEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  merchantCategorizationEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  merchantLogoEnrichmentEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  merchantNameCleaningEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  webhooks: z.lazy(() => WebhookListRelationFilterSchema).optional(),
  bankConnection: z.union([ z.lazy(() => BankConnectionRelationFilterSchema),z.lazy(() => BankConnectionWhereInputSchema) ]).optional(),
  creator: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default BankConnectionSettingsWhereUniqueInputSchema;

import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionSettingsIncludeSchema } from '../inputTypeSchemas/BankConnectionSettingsIncludeSchema'
import { BankConnectionSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/BankConnectionSettingsWhereUniqueInputSchema'
import { WebhookFindManyArgsSchema } from './WebhookFindManyArgsSchema'
import { BankConnectionArgsSchema } from './BankConnectionArgsSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { BankConnectionSettingsCountOutputTypeArgsSchema } from './BankConnectionSettingsCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BankConnectionSettingsSelectSchema: z.ZodType<Prisma.BankConnectionSettingsSelect> = z
    .object({
        id: z.boolean().optional(),
        syncEnabled: z.boolean().optional(),
        syncStartTime: z.boolean().optional(),
        syncDayOfWeek: z.boolean().optional(),
        syncDayOfMonth: z.boolean().optional(),
        syncFrequency: z.boolean().optional(),
        connectionTimeout: z.boolean().optional(),
        readTimeout: z.boolean().optional(),
        maxRequestsPerHour: z.boolean().optional(),
        maxConcurrentRequests: z.boolean().optional(),
        syncTransactions: z.boolean().optional(),
        syncBalances: z.boolean().optional(),
        syncStatements: z.boolean().optional(),
        syncIdentity: z.boolean().optional(),
        syncCategories: z.boolean().optional(),
        syncMerchants: z.boolean().optional(),
        syncAttachments: z.boolean().optional(),
        historicalDays: z.boolean().optional(),
        refreshTokenEnabled: z.boolean().optional(),
        autoReconnectEnabled: z.boolean().optional(),
        connectionStatus: z.boolean().optional(),
        bankConnectionId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        merchantEnrichmentEnabled: z.boolean().optional(),
        merchantCategorizationEnabled: z.boolean().optional(),
        merchantLogoEnrichmentEnabled: z.boolean().optional(),
        merchantNameCleaningEnabled: z.boolean().optional(),
        webhooks: z.union([z.boolean(), z.lazy(() => WebhookFindManyArgsSchema)]).optional(),
        bankConnection: z.union([z.boolean(), z.lazy(() => BankConnectionArgsSchema)]).optional(),
        creator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => BankConnectionSettingsCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const BankConnectionSettingsFindUniqueArgsSchema: z.ZodType<Prisma.BankConnectionSettingsFindUniqueArgs> = z
    .object({
        select: BankConnectionSettingsSelectSchema.optional(),
        include: BankConnectionSettingsIncludeSchema.optional(),
        where: BankConnectionSettingsWhereUniqueInputSchema
    })
    .strict()

export default BankConnectionSettingsFindUniqueArgsSchema

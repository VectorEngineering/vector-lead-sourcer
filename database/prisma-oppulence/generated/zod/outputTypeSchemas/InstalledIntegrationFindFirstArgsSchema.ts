import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InstalledIntegrationIncludeSchema } from '../inputTypeSchemas/InstalledIntegrationIncludeSchema'
import { InstalledIntegrationWhereInputSchema } from '../inputTypeSchemas/InstalledIntegrationWhereInputSchema'
import { InstalledIntegrationOrderByWithRelationInputSchema } from '../inputTypeSchemas/InstalledIntegrationOrderByWithRelationInputSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from '../inputTypeSchemas/InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationScalarFieldEnumSchema } from '../inputTypeSchemas/InstalledIntegrationScalarFieldEnumSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { IntegrationArgsSchema } from './IntegrationArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { OAuthRefreshTokenFindManyArgsSchema } from './OAuthRefreshTokenFindManyArgsSchema'
import { RestrictedTokenFindManyArgsSchema } from './RestrictedTokenFindManyArgsSchema'
import { WebhookArgsSchema } from './WebhookArgsSchema'
import { InstalledIntegrationCountOutputTypeArgsSchema } from './InstalledIntegrationCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InstalledIntegrationSelectSchema: z.ZodType<Prisma.InstalledIntegrationSelect> = z
    .object({
        id: z.boolean().optional(),
        userId: z.boolean().optional(),
        integrationId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        credentials: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        integration: z.union([z.boolean(), z.lazy(() => IntegrationArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        refreshTokens: z.union([z.boolean(), z.lazy(() => OAuthRefreshTokenFindManyArgsSchema)]).optional(),
        accessTokens: z.union([z.boolean(), z.lazy(() => RestrictedTokenFindManyArgsSchema)]).optional(),
        webhook: z.union([z.boolean(), z.lazy(() => WebhookArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InstalledIntegrationCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const InstalledIntegrationFindFirstArgsSchema: z.ZodType<Prisma.InstalledIntegrationFindFirstArgs> = z
    .object({
        select: InstalledIntegrationSelectSchema.optional(),
        include: InstalledIntegrationIncludeSchema.optional(),
        where: InstalledIntegrationWhereInputSchema.optional(),
        orderBy: z
            .union([InstalledIntegrationOrderByWithRelationInputSchema.array(), InstalledIntegrationOrderByWithRelationInputSchema])
            .optional(),
        cursor: InstalledIntegrationWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([InstalledIntegrationScalarFieldEnumSchema, InstalledIntegrationScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default InstalledIntegrationFindFirstArgsSchema

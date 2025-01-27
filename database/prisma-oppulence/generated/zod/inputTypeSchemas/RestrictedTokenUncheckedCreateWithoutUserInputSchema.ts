import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthRefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInputSchema'

export const RestrictedTokenUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.RestrictedTokenUncheckedCreateWithoutUserInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        hashedKey: z.string(),
        partialKey: z.string(),
        scopes: z.string().optional().nullable(),
        expires: z.coerce.date().optional().nullable(),
        lastUsed: z.coerce.date().optional().nullable(),
        rateLimit: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        projectId: z.string(),
        installationId: z.string().optional().nullable(),
        refreshTokens: z.lazy(() => OAuthRefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInputSchema).optional()
    })
    .strict()

export default RestrictedTokenUncheckedCreateWithoutUserInputSchema

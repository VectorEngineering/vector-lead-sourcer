import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateNestedOneWithoutAccountsInputSchema } from './UserCreateNestedOneWithoutAccountsInputSchema'

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z.string(),
        provider: z.string(),
        providerAccountId: z.string(),
        refresh_token: z.string().optional().nullable(),
        refresh_token_expires_in: z.number().int().optional().nullable(),
        access_token: z.string().optional().nullable(),
        expires_at: z.number().int().optional().nullable(),
        token_type: z.string().optional().nullable(),
        scope: z.string().optional().nullable(),
        id_token: z.string().optional().nullable(),
        session_state: z.string().optional().nullable(),
        user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
    })
    .strict()

export default AccountCreateInputSchema

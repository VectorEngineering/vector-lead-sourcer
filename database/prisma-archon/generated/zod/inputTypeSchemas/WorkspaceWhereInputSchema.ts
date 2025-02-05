import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserRelationFilterSchema } from './UserRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { WorkspaceMemberListRelationFilterSchema } from './WorkspaceMemberListRelationFilterSchema'
import { WorkspaceInvitationListRelationFilterSchema } from './WorkspaceInvitationListRelationFilterSchema'

export const WorkspaceWhereInputSchema: z.ZodType<Prisma.WorkspaceWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => WorkspaceWhereInputSchema), z.lazy(() => WorkspaceWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => WorkspaceWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => WorkspaceWhereInputSchema), z.lazy(() => WorkspaceWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ownerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        owner: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
        members: z.lazy(() => WorkspaceMemberListRelationFilterSchema).optional(),
        workspaceInvitations: z.lazy(() => WorkspaceInvitationListRelationFilterSchema).optional()
    })
    .strict()

export default WorkspaceWhereInputSchema

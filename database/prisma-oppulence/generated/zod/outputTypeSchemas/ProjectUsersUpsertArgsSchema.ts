import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectUsersIncludeSchema } from '../inputTypeSchemas/ProjectUsersIncludeSchema'
import { ProjectUsersWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectUsersWhereUniqueInputSchema'
import { ProjectUsersCreateInputSchema } from '../inputTypeSchemas/ProjectUsersCreateInputSchema'
import { ProjectUsersUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectUsersUncheckedCreateInputSchema'
import { ProjectUsersUpdateInputSchema } from '../inputTypeSchemas/ProjectUsersUpdateInputSchema'
import { ProjectUsersUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectUsersUncheckedUpdateInputSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { NotificationPreferenceArgsSchema } from './NotificationPreferenceArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectUsersSelectSchema: z.ZodType<Prisma.ProjectUsersSelect> = z
    .object({
        id: z.boolean().optional(),
        role: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        notificationPreference: z.union([z.boolean(), z.lazy(() => NotificationPreferenceArgsSchema)]).optional()
    })
    .strict()

export const ProjectUsersUpsertArgsSchema: z.ZodType<Prisma.ProjectUsersUpsertArgs> = z
    .object({
        select: ProjectUsersSelectSchema.optional(),
        include: ProjectUsersIncludeSchema.optional(),
        where: ProjectUsersWhereUniqueInputSchema,
        create: z.union([ProjectUsersCreateInputSchema, ProjectUsersUncheckedCreateInputSchema]),
        update: z.union([ProjectUsersUpdateInputSchema, ProjectUsersUncheckedUpdateInputSchema])
    })
    .strict()

export default ProjectUsersUpsertArgsSchema

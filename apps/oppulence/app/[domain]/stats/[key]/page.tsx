import { notFound, redirect } from 'next/navigation'

import { prismaEdge } from '@dub/prisma-oppulence/edge'
import { APP_DOMAIN } from '@dub/utils'

export const runtime = 'edge'

export default async function OldStatsPage({
  params,
}: {
  params: { domain: string; key: string }
}) {
  const link = await prismaEdge.link.findUnique({
    where: {
      domain_key: {
        domain: params.domain,
        key: params.key,
      },
    },
    select: {
      dashboard: true,
    },
  })

  if (!link?.dashboard) {
    notFound()
  }

  redirect(`${APP_DOMAIN}/share/${link.dashboard.id}`)
}

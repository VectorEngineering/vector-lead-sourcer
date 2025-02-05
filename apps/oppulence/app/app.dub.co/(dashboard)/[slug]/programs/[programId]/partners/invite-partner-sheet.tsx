import { AnimatedSizeContainer, BlurImage, Button, Sheet, useMediaQuery } from '@dub/ui'
import { Dispatch, SetStateAction, useState } from 'react'

import { invitePartnerAction } from '@/lib/actions/partners/invite-partner'
import useProgram from '@/lib/swr/use-program'
import useWorkspace from '@/lib/swr/use-workspace'
import { PartnerLinkSelector } from '@/ui/partners/partner-link-selector'
import { X } from '@/ui/shared/icons'
import { OppulenceConfig as platform } from '@dub/platform-config'
import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface InvitePartnerSheetProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

interface InvitePartnerFormData {
  email: string
  linkId: string
}

function InvitePartnerSheetContent({ setIsOpen }: InvitePartnerSheetProps) {
  const { program } = useProgram()
  const { id: workspaceId, slug } = useWorkspace()
  const { isMobile } = useMediaQuery()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<InvitePartnerFormData>({
    defaultValues: {
      email: '',
      linkId: '',
    },
  })

  const selectedLinkId = watch('linkId')

  const { executeAsync, isExecuting } = useAction(invitePartnerAction, {
    onSuccess: async () => {
      toast.success('Successfully invited partner!')
      setIsOpen(false)

      // TODO: refresh the invites list
    },
    onError({ error }) {
      toast.error(error.serverError)
    },
  })

  const createLink = async (search: string) => {
    clearErrors('linkId')

    if (!search) throw new Error('No link entered')

    const shortKey = search.startsWith(`${program?.domain}/`)
      ? search.substring(`${program?.domain}/`.length)
      : search

    const response = await fetch(`/api/links?workspaceId=${workspaceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        domain: program?.domain,
        key: shortKey,
        url: program?.url,
        trackConversion: true,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      const { error } = result
      throw new Error(error.message)
    }

    setValue('linkId', result.id, { shouldDirty: true })

    return result.id
  }

  const onSubmit = async (data: InvitePartnerFormData) => {
    let { linkId } = data

    try {
      if (!linkId) setError('linkId', { message: 'Please select a referral link' })

      await executeAsync({
        workspaceId: workspaceId!,
        programId: program?.id!,
        email: data.email,
        linkId,
      })
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col">
      <div>
        <div className="flex items-start justify-between border-b border-neutral-200 p-6">
          <Sheet.Title className="text-xl font-semibold">Invite partner</Sheet.Title>
          <Sheet.Close asChild>
            <Button
              variant="outline"
              icon={<X className="size-5" />}
              className="h-auto w-fit p-1"
            />
          </Sheet.Close>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="flex items-center space-x-2">
                <h2 className="text-sm font-medium text-gray-900">Email</h2>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  {...register('email')}
                  className="block w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="panic@thedis.co"
                  required
                  type="email"
                  autoComplete="off"
                  autoFocus={!isMobile}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Referral link</h2>
                <a
                  href={`/${slug}/programs/${program?.id}/settings`}
                  target="_blank"
                  className="text-sm text-gray-500 underline-offset-2 hover:underline"
                  rel="noreferrer"
                >
                  Settings
                </a>
              </div>

              <AnimatedSizeContainer
                height
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="-m-1 mt-1"
              >
                <div className="p-1">
                  <PartnerLinkSelector
                    programDomain={program?.domain ?? undefined}
                    selectedLinkId={selectedLinkId}
                    setSelectedLinkId={id => {
                      clearErrors('linkId')
                      setValue('linkId', id, { shouldDirty: true })
                    }}
                    onCreate={async search => {
                      try {
                        await createLink(search)
                        return true
                      } catch (error) {
                        toast.error(error?.message ?? 'Failed to create link')
                      }
                      return false
                    }}
                    domain={program?.domain ?? undefined}
                    error={!!errors.linkId}
                  />
                  {errors.linkId && (
                    <p className="mt-2 text-xs text-red-600">{errors.linkId.message}</p>
                  )}
                </div>
              </AnimatedSizeContainer>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900">Preview</h2>
              <div className="mt-2 overflow-hidden rounded-md border border-neutral-200">
                <div className="grid gap-4 p-6 pb-10">
                  <BlurImage
                    src={program?.logo || platform.assets.logo}
                    alt={program?.name || platform.company}
                    className="my-2 size-8 rounded-full"
                    width={48}
                    height={48}
                  />
                  <h3 className="font-medium text-gray-900">
                    {program?.name || platform.company} invited you to join {platform.company}{' '}
                    Partners
                  </h3>
                  <p className="text-sm text-gray-500">
                    {program?.name || platform.company} uses {platform.company} Partners to power
                    their partnership programs and wants to partner with great people like yourself!
                  </p>
                  <Button type="button" text="Accept invite" className="w-fit" />
                </div>
                <div className="grid gap-1 border-t border-gray-200 bg-gray-50 px-6 py-4">
                  <p className="text-sm text-gray-500">
                    <strong className="font-medium text-gray-900">From: </strong>
                    {platform.email.from.default}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="font-medium text-gray-900">Subject: </strong>
                    You&apos;ve been invited to {platform.company} Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col justify-end">
        <div className="flex items-center justify-end gap-2 border-t border-neutral-200 p-5">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setIsOpen(false)}
            text="Cancel"
            className="w-fit"
            disabled={isExecuting}
          />
          <Button
            type="submit"
            variant="primary"
            text="Send invite"
            className="w-fit"
            loading={isExecuting}
          />
        </div>
      </div>
    </form>
  )
}

export function InvitePartnerSheet({
  isOpen,
  ...rest
}: InvitePartnerSheetProps & {
  isOpen: boolean
}) {
  return (
    <Sheet open={isOpen} onOpenChange={rest.setIsOpen}>
      <InvitePartnerSheetContent {...rest} />
    </Sheet>
  )
}

export function useInvitePartnerSheet() {
  const [isOpen, setIsOpen] = useState(false)

  return {
    invitePartnerSheet: <InvitePartnerSheet setIsOpen={setIsOpen} isOpen={isOpen} />,
    setIsOpen,
  }
}

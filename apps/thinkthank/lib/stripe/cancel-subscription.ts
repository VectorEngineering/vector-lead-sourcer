import { BusinessConfig as platform } from '@dub/platform-config'
import { stripe } from '.'

export async function cancelSubscription(customer?: string) {
    if (!customer) return

    try {
        const subscriptionId = await stripe.subscriptions
            .list({
                customer
            })
            .then((res) => res.data[0].id)

        return await stripe.subscriptions.update(subscriptionId, {
            cancel_at_period_end: true,
            cancellation_details: {
                comment: `${platform.company} workspace deleted.`
            }
        })
    } catch (error) {
        console.log('Error cancelling Stripe subscription', error)
        return
    }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    request: string
}

export const handleLightGroup = async (arg: boolean) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // La API sólo funciona así.
    let response
    try {
        response = await fetch(`${process.env.HUE_URL}/clip/v2/resource/grouped_light/${process.env.HUE_GROUPEDLIGHT_PID}`, {
            method: "PUT",
            headers: {
                "hue-application-key": `${process.env.HUE_APPLICATION_KEY}`
            },
            body: JSON.stringify({ "on": { "on": arg } })
        })
    } catch (error) {
        console.error(error)
    }
    return response
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { action } = req.query
    const actionToBoolean = () => action === 'true' ? true : false
    res.status(200).json({ request: "Ok!" })
    handleLightGroup(actionToBoolean())
}

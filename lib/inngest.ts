import { Inngest } from 'inngest'
import { api } from 'misskey-js'
import randomHaiku from './haiku'
import getSeasonProgress, { getSeason } from './season'

const inngest = new Inngest({
    name: 'Yukimori',
})

const note = async (hashtag: string, date?: Date) => {
    const cli = new api.APIClient({
        credential: process.env.MISSKEY_TOKEN,
        origin: 'https://submarin.online',
    })
    const { progress, bar } = getSeasonProgress()
    await cli.request('notes/create', {
        text: `#${hashtag}\n> ${date ? randomHaiku(getSeason(date)).join('\n> ') : randomHaiku().join('\n> ')}\n${bar}\n<center>${progress}</center>`
    })
}

export const ohayou = inngest.createFunction(
    { name: 'Ohayou Note' },
    { cron: 'TZ=Asia/Tokyo 30 7 * * *' },
    async () => {
        await note('おはよう', new Date())
    }
)

export const oyasumi = inngest.createFunction(
    { name: 'Oyasumi Note' },
    { cron: 'TZ=Asia/Tokyo 30 23 * * *' },
    async () => {
        await note('おやすみ')
    }
)

export default inngest

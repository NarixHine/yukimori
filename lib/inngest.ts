import { Inngest } from 'inngest'
import { api } from 'misskey-js'
import randomHaiku from './haiku'

const inngest = new Inngest({
    name: 'Yukimori',
})

const note = async (hashtag: string, month = new Date().getMonth()) => {
    const cli = new api.APIClient({
        origin: 'https://submarin.online',
        credential: process.env.MISSKEY_TOKEN
    })
    // Spring - Feb. ~ Apr.
    const season = Math.floor(month === 0 ? 3 : (month - 1) / 3) % 4 as 0 | 1 | 2 | 3
    await cli.request('notes/create', {
        text: `#${hashtag}\n> ${randomHaiku(season).join('\n> ')}`
    })
}

export const ohayou = inngest.createFunction(
    { name: 'Ohayou Note' },
    { cron: 'TZ=Asia/Tokyo 30 7 * * *' },
    async () => {
        await note('おはよう')
    }
)

export const oyasumi = inngest.createFunction(
    { name: 'Oyasumi Note' },
    { cron: 'TZ=Asia/Tokyo 30 23 * * *' },
    async () => {
        await note('おやすみ', Math.floor(Math.random() * 12))
    }
)

export default inngest

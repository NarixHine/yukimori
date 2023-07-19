import { Inngest } from 'inngest'
import { api } from 'misskey-js'
import randomHaiku from './haiku'

const inngest = new Inngest({
    name: 'Yukimori',
})

export const oyasumi = inngest.createFunction(
    { name: 'Oyasumi Note' },
    { cron: 'TZ=Asia/Japan 0 23 * * *' },
    async () => {
        const cli = new api.APIClient({
            origin: 'https://misskey.cloud',
            credential: process.env.MISSKEY_TOKEN
        })
        const season = Math.floor((new Date().getMonth() - 2) / 3) % 4 as 0 | 1 | 2 | 3
        await cli.request('notes/create', {
            text: `#おやすみ\n> ${randomHaiku(season).join('\n> ')}`
        })
    }
)

export default inngest

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
    const { season, percentage, bar, symbols } = getSeasonProgress()
    const progressBar = `<center>${bar}\n${season}は、\`${percentage}\` 終わる。\n${symbols}</center>`

    await cli.request('drive/files/upload-from-url', {
        url: `https://yukimori.narix.link/api/bar?p=${percentage}`
    })
    const { id } = (await cli.request('drive/files', { limit: 1 }))[0]
    await cli.request('notes/create', {
        text: `#${hashtag}\n> ${date ? randomHaiku(getSeason(date)).join('\n> ') : randomHaiku().join('\n> ')}\n${progressBar}`,
        fileIds: [id],
        visibility: 'home'
    })
    const { description } = await cli.request('users/show', {
        userId: '9hdihe2rmm'
    })
    await cli.request('i/update', {
        description: `${description?.split('\n\n<center>')[0]}\n\n${progressBar}\n`
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

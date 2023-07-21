const seasonBeginDates = [
    new Date(new Date().getFullYear(), 1, 4), // 立春
    new Date(new Date().getFullYear(), 4, 5),
    new Date(new Date().getFullYear(), 7, 8),
    new Date(new Date().getFullYear(), 10, 7),
    new Date(new Date().getFullYear() + 1, 1, 4),
]

const seasonKanji = [
    '春',
    '夏',
    '秋',
    '冬'
]

const progressLength = 16

export function getSeason(date: Date) {
    const index = seasonBeginDates.concat(date).sort((first, second) => first.getTime() - second.getTime()).indexOf(date)
    return index === 0 ? 3 : index - 1 as 0 | 1 | 2 | 3
}

function dateDiff(first: Date, second: Date) {
    return Math.max(0, Math.round((second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)))
}

function getSeasonProgress() {
    const today = new Date()
    const season = getSeason(today)
    const seasonLength = dateDiff(seasonBeginDates[season], seasonBeginDates[season + 1])
    const restLength = dateDiff(today, seasonBeginDates[season + 1])
    const restEmojis = Math.round(restLength / seasonLength * 12)
    const pastPercentage = 100 - Math.floor(restLength / seasonLength * 100)
    return {
        progress: `${seasonKanji[season]}は、\`${pastPercentage}%\`終わる。`,
        bar: `<center>${'🟥'.repeat(progressLength - restEmojis)}${'🟩'.repeat(restEmojis)}</center>\n`
    }
}

export default getSeasonProgress

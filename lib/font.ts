async function fetchFont(
    text: string,
    font: string
) {
    const API = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
        text
    )}`
    const css = await (
        await fetch(API, {
            headers: {
                // Make sure it returns TTF.
                'User-Agent':
                    'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+',
            },
        })
    ).text()
    const resource = css.match(
        /src: url\((.+)\) format\('(opentype|truetype)'\)/
    )
    const res = await fetch(resource![1])
    return res.arrayBuffer()
}

export default fetchFont

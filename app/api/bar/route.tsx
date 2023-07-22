import { ImageResponse, NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const percentage = req.nextUrl.searchParams.get('p') as string
    return new ImageResponse((
        <div style={{ backgroundColor: 'rgb(0,255,127)', display: 'flex', width: '100%', height: '100%' }}>
            <div style={{ width: percentage, backgroundColor: 'rgb(240,128,128)' }}></div>
        </div>
    ), { height: 20, width: 1000 })
}

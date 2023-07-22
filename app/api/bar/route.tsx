import { ImageResponse, NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const percentage = req.nextUrl.searchParams.get('p') as string
    const symbols = req.nextUrl.searchParams.get('emoji') as string
    return new ImageResponse((
        <div style={{
            display: 'flex',
            gap: 20,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(to right top, rgb(255, 228, 230), rgb(204, 251, 241))'
        }}>
            <div style={{ backgroundColor: 'rgb(0,255,127)', display: 'flex', width: '80%', height: 40 }}>
                <div style={{ width: percentage, backgroundColor: 'rgb(240,128,128)' }}></div>
            </div>
            <div style={{ textAlign: 'center', fontSize: 40 }}>{symbols}</div>
        </div>
    ), { height: 900, width: 1600 })
}

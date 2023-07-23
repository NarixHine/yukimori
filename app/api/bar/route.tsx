import fetchFont from '@/lib/font'
import { ImageResponse, NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const percentage = req.nextUrl.searchParams.get('p') as string
    const symbols = req.nextUrl.searchParams.get('emoji') as string
    const season = req.nextUrl.searchParams.get('season') as string
    return new ImageResponse((
        <div style={{
            display: 'flex',
            fontFamily: 'font',
            gap: 20,
            paddingBottom: 60,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(to right top, rgb(255, 228, 230), rgb(204, 251, 241))'
        }}>
            <div style={{ textAlign: 'center', fontSize: 70, color: '#3F2305', paddingLeft: 30 }}>{`${season}。`}</div>
            <div style={{ backgroundColor: '#B3FFAE', display: 'flex', width: '80%', height: 30 }}>
                <div style={{ width: percentage, backgroundColor: '#FF6464' }}></div>
            </div>
            <div style={{ textAlign: 'center', fontSize: 30 }}>{symbols}</div>
        </div>
    ), {
        height: 900,
        width: 1600,
        fonts: [
            {
                name: 'font',
                data: await fetchFont(`${season}。`, 'Zen+Kurenaido'),
                style: 'normal',
            },
        ],
    })
}

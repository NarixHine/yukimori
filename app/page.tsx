import getSeasonProgress from '@/lib/season'

export default function Home() {
  const { percentage, season, symbols } = getSeasonProgress()
  return (
    <main className='p-8 text-center'>
      <h1 className='text-5xl'>
        <span className='bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-sky-400 to-sky-600'>ゆきもり</span>
      </h1>
      <p className='text-slate-500'>雪の世を　ぼっと霞んだ　窓曇り</p>
      <br></br>

      <div className='w-2/3 mx-auto' style={{ minWidth: 280 }}>
        <iframe src='https://missbed.narix.link/timeline/submarin.online/9hdihe2rmm' width={'100%'} height={1000}></iframe>
      </div>
      <br></br>
      <p className='text-slate-500'>{season}は、{percentage} 終わる。</p>
      <br></br>

      <footer className='text-slate-700 align-middle'>
        Live on <a target='_blank' rel='noreferrer' href='https://submarin.online/@yukimori' className='underline'>Submarin</a>
        <br></br>
        Timeline Embedded with <a target='_blank' rel='noreferrer' href='https://missbed.narix.link/' className='underline'>Missbed</a>
        <br></br>
        Open Source on <a target='_blank' rel='noreferrer' href='https://github.com/narixhine/yukimori' className='underline'>GitHub</a>
        <br></br>
        Season Division Based on <a target='_blank' rel='noreferrer' href='https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%8D%81%E5%9B%9B%E7%AF%80%E6%B0%97' className='underline'>二十四節気</a>
        <br></br><br></br>
        {symbols}
      </footer>
    </main>
  )
}

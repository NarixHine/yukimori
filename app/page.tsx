export default function Home() {
  return (
    <main className='p-8'>
      <h1 className='text-5xl text-center'>
        <span className='bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-sky-400 to-sky-600'>ゆきもり</span>
      </h1>
      <p className='text-center text-slate-500'>雪の世を　ぼっと霞んだ　窓曇り</p>
      <br></br>

      <div className='w-2/3 mx-auto' style={{ minWidth: 280 }}>
        <iframe src='https://missbed.narix.link/timeline/submarin.online/9hdihe2rmm' width={'100%'} height={1000}></iframe>
      </div>
      <br></br>

      <footer className='text-center text-slate-700 align-middle'>
        Live on <a target='_blank' rel='noreferrer' href='https://submarin.online/@yukimori' className='underline'>Submarin</a>
        <br></br>
        Timeline Embedded with <a target='_blank' rel='noreferrer' href='https://missbed.narix.link/' className='underline'>Missbed</a>
        <br></br>
        Open Source on <a target='_blank' rel='noreferrer' href='https://github.com/narixhine/yukimori' className='underline'>GitHub</a>
      </footer>
    </main>
  )
}

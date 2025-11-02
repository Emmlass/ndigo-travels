import './App.css'

function App() {
    return (
    <>
      <header className='flex justify-between gap-2 p-4'>
        <a href="" className="logo flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 -rotate-225">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <span className='font-bold text-xl'>Ndigo Travels</span>
        </a>
        <div className='flex border gap-2 border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-400'>
          <div>Anywhere</div>
          <div className="h-6 border border-left border-gray-300"></div>
          <div>Anyweek</div>
          <div className="h-6 border border-left border-gray-300"></div>
          <div>AnyTime</div>
          <button className='bg-[#4388f0] text-white p-1 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
          </button>
        </div>
      </header>
      
      
    </>
  )
}

export default App

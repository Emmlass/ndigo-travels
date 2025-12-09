import './App.css'

function App() {
    return (
    <>
      <header className='flex justify-between gap-2 p-4'>
        <a href="" className="logo flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 -rotate-90 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
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
       <div className="flex border gap-2 border-gray-300 rounded-full py-2 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


       </div>
      </header>
    </>
  )
}

export default App

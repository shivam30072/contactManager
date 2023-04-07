
const Navbar = () => {
  return (
    <div className='min-h-[10vh] bg-slate-700 flex justify-between items-center text-white '>
      <div className='hidden sm:w-[20%] sm:flex'>
        <h1>logo</h1>
      </div>
      <div className='hidden sm:w-[80%] sm:flex sm:justify-center'>
        <div>
       <span>Home</span>
        <span className='ml-6 cursor-pointer'>Rules</span>
        <span className='ml-6 cursor-pointer'>Contact</span>
        </div>
      </div>
      <div className='hidden sm:w-[20%] sm:flex sm:justify-end'>
        <button onClick={() => {alert('you are logged in')}} className="mr-4 p-1 rounded-lg bg-white text-slate-500 hover:scale-110 transition duration-300">Sign out</button>
      </div>
    </div>
  )
}

export default Navbar
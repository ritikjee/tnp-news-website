import {BsSearch} from 'react-icons/bs'
import { useState } from 'react'

function Navbar() {
  const [search, setSearch] = useState('')
  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
   if(search.length!==0){
    window.location.href=`/search/${search}`
   }
    console.log(search.length)
  }
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    
    <a className="btn btn-ghost normal-case text-xl" href='/'>News</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search for hashtags" name='search' value={search} className="input input-bordered w-24 md:w-auto" onChange={handleChange} />
    </div>
    <button className={search.length<=2?'btn btn-disabled btn-circle':'btn btn-primary btn-circle'} onClick={handleSubmit}>
      <BsSearch className='text-white font-bold'/>
    </button>
  </div>
</div>
    </>
  )
}

export default Navbar
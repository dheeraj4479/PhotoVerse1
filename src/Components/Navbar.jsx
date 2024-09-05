import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Navbar = () => {
 const {fetchImageBycategory,setQuery } = useContext(PixabayContext)
  return (
    <>
    <div className='container text-center my-3'> 
     <button type="button"onClick={()=>fetchImageBycategory("nature")} className="btn btn-outline-primary mx-3">Nature</button>
<button type="button"onClick={()=>fetchImageBycategory("science")} className="btn btn-outline-warning mx-3">Science</button>
<button type="button"onClick={()=>fetchImageBycategory("computer")} className="btn btn-outline-success mx-3">Computer</button>
<button type="button"onClick={()=>fetchImageBycategory("business")} class="btn btn-outline-danger mx-3">Business</button>
<button type="button"onClick={()=>fetchImageBycategory("buildings")} className="btn btn-outline-warning mx-3">Buildings</button>
<button type="button"onClick={()=>fetchImageBycategory("sports")} className="btn btn-outline-info mx-3">Sports</button>
<button type="button"onClick={()=>fetchImageBycategory("transportation")} className="btn btn-outline-light mx-3">Transportation</button>
<button type="button"onClick={()=>fetchImageBycategory("food")} className="btn btn-outline-dark mx-3">Food</button>
    </div>
    <div className='container' style={{width:"800px"}}>
      <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control bg-dark  text-light"></input>
    </div>
    </>
  )
}
 
export default Navbar
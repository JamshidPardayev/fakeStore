import React from 'react'
import notFountGif from "../../assets/notFound.gif"
const NotFound = () => {
  return (
    <div>
      <img src={notFountGif} alt="notFoundGif" className='w-screen'/>
    </div>
  )
}

export default NotFound

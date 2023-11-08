import React from 'react'

const Wrapper2 = ({children , className}) => {
  return (
    <div
    className={`w-full max-w-[1280px] px-5 md:pl-[195px]  mx-auto ${className || ''}`}
    >{children}</div>
  )
}

export default Wrapper2
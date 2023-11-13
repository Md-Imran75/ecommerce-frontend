import React from 'react'
import ProtectRoute from '@/utils/ProtectRoute'
import Wrapper from '@/app/ui/wrapper/Wrapper'



const Order = () => {
    
   
  return (
    <div>
    <ProtectRoute>
     <Wrapper>
      <div>Hello</div>
     </Wrapper>
    </ProtectRoute>
    </div>
  )

}

export default Order
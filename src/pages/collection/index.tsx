import ProductCard from '@/components/ProductCard'
import React from 'react'

const index = () => {
    const a = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>  
        <div className='flex gap-6 flex-row '>
        {
            a.map((item,index)=>(
                <div key={index}>
                    <p>{item}</p>
                    <ProductCard/>
                </div>
            ))
        }
        </div>
    </>
  )
}

export default index
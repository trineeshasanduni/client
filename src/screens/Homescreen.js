import React from 'react'
import coffee from '../fooddata'

export default function Homescreen() {
  return (
    <div>
        <div className='row'>
            {coffee.map(coffee=>{
                return <div className='col-md-4'>
                    <div>
                        {/* <coffee/> */}
                    </div>
                    </div>
            })}
        </div>

    </div>
  )
}

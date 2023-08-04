import React from 'react'
import coffees from '../fooddata'
import Coffee from '../components/Coffee'

export default function Homescreen() {
  return (
    <div>
        <div className='row' >
          {coffees.map(coffee=>{
            return <div className='col-md-4 p-3'>
              <div>
                <Coffee coffee={coffee}/>
                </div>
              </div>

          })}
            
        </div>

    </div>
  )
}

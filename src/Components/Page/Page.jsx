import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Item from '../Item/Item'

function Page({data, loading}) {
       

    if(loading){
        return (
           <h2> Loading!!!</h2>
        )
    }else{
        return (
            //{/* ==== render posts ==== */}
            <ul className='main__list'>
            {/* ===== Data map ======  */}
                {
                    data.map(item => (
                        <Item item={item} key={item.id} />
                        ))
                    }
            </ul>
      )
    }    
}

export default Page
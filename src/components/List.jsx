import React from 'react'
import Item from './Item'


const List = ({list}) => {
    console.log(list);
  return (
    <div className='list-container'>
      <h1>KOREA REPUBLIC</h1>
        <div className='item-container'>
          {list.map((item, index)=><Item key={index} item={item} index={index}/>)}
        </div>
        <h1>MF</h1>
        <div className='item-container'>
          {list
          .filter(item=>item.position==='MF')
          .map((item, index)=><Item key={index} item={item} index={index}/>)}
        </div>
    </div>
  )
}

export default List
import React from 'react'

function CardComponet(props) {
    const cardObj = props.item
  return (
    <>
     <div className='card'>
        {console.log(cardObj)}
        <img src={`https://picsum.photos/200?random=${cardObj.id}`}/>
        <div className='title-des' >
         <div>
        <h4>{cardObj.title}</h4>
        <p>{cardObj.body}</p>
        </div>
        <div>
          <img className="arrow-icon" width="32" height="32" src="https://img.icons8.com/windows/32/circled-chevron-right.png" alt="circled-chevron-right"/>
        </div>
        </div>
     </div>
    </>
  )
}

export default CardComponet
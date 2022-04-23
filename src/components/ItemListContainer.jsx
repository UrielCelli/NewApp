import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div>
        <h1 className='font-mono text-3xl text-center hover'>Bienvenido a {props.name}</h1>
    </div>
  )
}

export default ItemListContainer
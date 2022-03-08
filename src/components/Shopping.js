import React from 'react'

const Shopping = (props) => {

    function AddToCart() {

    }

  return (
    <>
        <h1>Welcome To Our Store</h1>
     {props.products.map((product, index) => (
            <div className='prod-block' key={index}>
                <p className="prod-title">{product.title}</p>
                <p className="prod-desc">{product.description}</p>
                <p className="prod-date" >{product.price}</p>
                <button OnClick={AddToCart}>Add To Cart</button>
            </div>
        ))}
    </>
    )
}

export default Shopping;
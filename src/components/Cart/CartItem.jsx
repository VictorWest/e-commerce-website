import React from 'react'
import { ProductConsumer } from '../../Context'
export default function CartItem(props) {
  return (
    <ProductConsumer>
        {value => {
            const {id, img, title, price, total, count} = props.item
            const {increment, decrement, removeItem} = value
            return(
                <div className="row my-11 text-capitalize text-center">
                    <div className="col-10 mx-auto col-lg-2">
                        <img className='img-fluid' src={img} alt="product" style={{width: '5rem', height: '5rem'}}/>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">product: </span>{title}
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">price: </span>₦{price}
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center">
                            <div className="">
                                <span className="btn btn-black mx-15" onClick={() => decrement(id)}>
                                    -
                                </span>
                                <span className="btn btn-black mx-15 m-1">
                                    {count}
                                </span>
                                <span className="btn btn-black mx-15" onClick={() => increment(id)}>
                                    +
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* End of button columns */}
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="cart-icon" onClick={() => removeItem(id)}>
                            <i className='fas fa-trash'></i>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <strong>item total: ₦{total}</strong>
                    </div>
                </div>
            )
        }}
    </ProductConsumer>
  )
}


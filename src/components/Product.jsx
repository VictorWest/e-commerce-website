import { React } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../Context'
import PropTypes from 'prop-types'
export default function Product(props){
    const {id, title, img, price, inCart} = props.product
    return(
        <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
            <div className='card'>
            <ProductConsumer>
                {value => {
                    return(
                        <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to='/details'>
                                            <img src={props.img} alt='product' className='card-img-top' />
                                        
                                
                            </Link>
                            <button className="card-btn" disabled={inCart ? true : false} 
                            onClick={
                                () => {
                                    value.addToCart(id);
                                    value.openModal(id)
                                }
                            }>
                                {inCart ? 
                                    <p className='text-capitalize mb-0' disabled>In Cart</p> 
                                    : <i className='fas fa-cart-plus'></i>   
                                }
                            </button>
                        </div>
                    )
                }}
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className='align-self-center mb-0'>
                        {props.title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">₦{props.price}</span>
                    </h5>
                </div>
            </div>
        </ProductWrapper>
    )
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 0.1s linear;
    }
    &:hover{
        .card{
            border: 0.05rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px #232528
        }
        .card-footer{
            background:rgba(247,247,247)
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
    .card-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        border-radius: 0.5rem 0 0 0;
        transform:translate(100%, 100%);
        transition: all .2s linear;
        cursor: pointer;
        &:hover{
            color: var(--mainBlue)
        }
    }
    .img-container:hover .card-btn{
        transform:translate(0, 0)
    }
`
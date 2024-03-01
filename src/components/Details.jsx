import { ProductConsumer } from "../Context"
import { Link } from "react-router-dom"
import { ButtonContainer } from "./Button"
export default function Details(){
    return(
        <ProductConsumer>
             {value => {
                const {id,company, img, info, price, title, inCart} = value.detail
                return(
                    <div className="container py-5">
                        {/* Title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* End of Title */}
                        {/* Product Info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img className="img-fluid" src={img} alt="product"/>
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h3>Model: {title}</h3>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made by: <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price: <span>₦{price}</span>
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Information:
                                </p>
                                <p className="text-muted lead">{info}</p>
                                {/* Buttons */}
                                <div>
                                    <Link to='/'>
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                    cart
                                    disabled={inCart ? true : false} onClick={ () => {
                                        value.addToCart(id);
                                        value.openModal(id)
                                    }}>
                                        {inCart? "In Cart" : "Add to Cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
             }}
        </ProductConsumer>
    )
}
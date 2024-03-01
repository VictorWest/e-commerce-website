import Title from "../Title"
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import { ProductConsumer} from '../../Context'
import CartList from "./CartList"
import CartTotals from "./CartTotals"
export default function Cart(){
    return(
        <section>
            
            <ProductConsumer>
                    {value => {
                        if(value.cart.length == 0){
                            return <EmptyCart/>
                        }
                        return (
                        <>
                            <Title name="your" title="cart"/>
                            <CartColumns/>
                            <CartList value={value}/>
                            <CartTotals value={value}/>
                        </>
                        )
                    }}
                </ProductConsumer>
        </section>
    )
}
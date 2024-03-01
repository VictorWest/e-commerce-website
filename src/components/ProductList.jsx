import { React, useState } from 'react'
import Product from "./Product"
import Title from './Title'
import { ProductConsumer } from '../Context.jsx'
export default function ProductList(){
    return(
        <>
            <div className='py-5'>
                <div className="container">
                    <Title name="our" title="products"/>
                    <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map((product) => {
                                    return <Product key={product.id} title={product.title} img={product.img} price={product.price} company={product.company} info={product.info} product = {product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </>
    )
}


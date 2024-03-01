import React, { useEffect, useMemo, useState } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext()

const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [detail, setDetail] = useState(detailProduct);
    const [cart, setCart] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(detail)
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [cartTax, setCartTax] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    
    const setProduct = () => {
        let products = []
        storeProducts.forEach((item) => {
            const singleItem = {...item}
            products = [...products, singleItem]
        })
        setProducts(products)
    }
    useEffect(() => {
        setProduct()
    }, [])

    const getItem = (id) => {
        const product = products.find((item) => {
            return item.id === id
        })
        return product
    }
    const handleDetail = (id) => {
        const product = getItem(id)
        setDetail(product)
    };

    const addToCart = (id) => {
        const tempProducts = [...products]
        const index = tempProducts.indexOf(getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        setProducts(tempProducts)
        setCart(prevVal => {
            return [...prevVal, product]
        })
        
    };
    useEffect(() => {
        addTotals();
    }, [cart])
    const openModal = (id) => {
        const product = getItem(id)
        setModal(product)
        setModalOpen(true)
    }
    
    const closeModal = () => {
        setModalOpen(false)
    }

    const increment = (id) => {
        let tempCart = [...cart]
        let tempProducts = []
        cart.map((item) => {
            tempProducts.push(item.title)
        })
        let item = getItem(id).title
        const index = tempProducts.indexOf(item)
        const product = tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price
        setCart([...tempCart]),
        () => addTotals()
    }

    const decrement = (id) => {
        let tempCart = [...cart]
        let tempProducts = []
        cart.map((item) => {
            tempProducts.push(item.title)
        })
        let item = getItem(id).title
        const index = tempProducts.indexOf(item)
        const product = tempCart[index]
        if(product.count > 1){
            product.count = product.count - 1
            product.total = product.count * product.price
            setCart([...tempCart]),
            () => addTotals()
        }else{
            removeItem(id)
        }
    }

    const removeItem = (id) => {
        let tempProducts = [...products]
        let tempCart = [...cart]
        tempCart = tempCart.filter((item) =>{
            return item.id !== id
        })
        const index = tempProducts.indexOf(getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removeItem.total = 0
        setCart([...tempCart])
        setProducts([...tempProducts]),
        () => addTotals()
    }


    const addTotals = () => {
        let subTotal = 0
        cart.map((item) => {
            return subTotal += item.total
        })
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        setCartSubTotal(subTotal)
        setCartTax(tax)
        setCartTotal(total)
    }
    const clearCart = () => {
            setCart([]);
            setProduct();
            addTotals()
    }
    return (
        <ProductContext.Provider value={{
            products: products,
            detail: detail,
            handleDetail: handleDetail,
            addToCart: addToCart,
            modal: modal,
            modalOpen:modalOpen,
            openModal: openModal,
            closeModal: closeModal,
            increment:increment,
            decrement:decrement,
            removeItem:removeItem,
            clearCart:clearCart,
            cart:cart,
            cartSubTotal:cartSubTotal,
            cartTax:cartTax,
            cartTotal:cartTotal
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};


const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}
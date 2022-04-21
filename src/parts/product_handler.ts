import React from 'react'

interface item_in_cart {
    item?: string
    quantity?: number
}

let items_in_cart:item_in_cart = {}

export function Product(item: string)
{
    // This doesn't work, but improve interface to get data more smoothly
    // This will store what items have been put into cart, does not record quantity yet, and it will transfer data to cart, figure out objects
    // items_in_cart[item] = 1
    console.log(items_in_cart)
}

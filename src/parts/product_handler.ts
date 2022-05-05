let items_in_cart: Map<string, {quantity: number, description: string, price: number}> = new Map()
export let keys: string[] = []
export let quantity: number[] = []
export let descr: string[] = []
export let price: number[] = []

export function Add_product(key: string, quantity: number, descr: string, price: number)
{
    // This method adds quantities together and prevents duplicates
    if (items_in_cart.has(key)) {
        let sum = items_in_cart.get(key)!.quantity
        sum = sum + quantity
        items_in_cart.set(key, {quantity: sum, description: descr, price: price})
    } else {
        items_in_cart.set(key, {quantity: quantity, description: descr, price: price})
    }
    

    record_products()
    console.clear() //Helps keep track, otherwise, its useless
    for (const item of items_in_cart.entries()) { 
        console.log(`Entry: ${item[0]}, Quantity: ${item[1].quantity}, Price: $${item[1].price}`)
    }

    
}

function record_products() {
    keys = [] //Records keys for each product
    for (const item of items_in_cart.entries()) {
        keys.push(item[0])
    }

    quantity = [] //Records each quantity (aligns with key index)
    for (const item of items_in_cart.entries()) {
        quantity.push(item[1].quantity)
    }

    descr = [] //Records each descriptions (aligns with key index)
    for (const item of items_in_cart.entries()) {
        descr.push(item[1].description)
    }

    price = [] //Records each price (aligns with key index)
    for (const item of items_in_cart.entries()) {
        price.push(item[1].price)
    }
    
}
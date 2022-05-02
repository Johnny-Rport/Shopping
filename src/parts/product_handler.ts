export let items_in_cart: Map<string, {quantity: number}> = new Map()


export function Add_product(key: string, quantity: number)
{
    // This method adds quantities together and prevents duplicates
    if (items_in_cart.has(key)) {
        let sum = items_in_cart.get(key)!.quantity
        sum = sum + quantity
        items_in_cart.set(key, {quantity: sum})
    } else {
        items_in_cart.set(key, {quantity: quantity})
    }
    
    console.clear() //Helps keep track, otherwise, its useless
    for (const item of items_in_cart.entries()) { 
        console.log(`Entry: ${item[0]}, Quantity: ${item[1].quantity}`)
    }

    
}
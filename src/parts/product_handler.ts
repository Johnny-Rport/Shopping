interface item {
    key: string
    quantity: number
}

export let items_in_cart: {key: string, quantity: number}[] = []


export function Add_product(key: string, quantity: number)
{
    let item: item = {
        key: key,
        quantity: quantity,
    }

    items_in_cart.push(item)

    // This method adds quantities together and prevents duplicates
    if (items_in_cart.length > 1) {add_and_check(key, quantity)} 
    
    return console.log(items_in_cart) //Helps keep track, otherwise, its useless
}


function add_and_check(key: string, quantity: number) 
{
    for (let i = 0; i < items_in_cart.length; i++) {
        const element = items_in_cart[i];
        if (key === element.key) {
            element.quantity += quantity
            items_in_cart.pop()
        }
        break
    } 
}
const URL = 'https://fakestoreapi.com/products'

const layout = (products) => {

}

async function getProducts() {
    const response = await fetch(URL);
    return await response.json();
}

const init = async () => {
    const products = await getProducts();
    
}

init()

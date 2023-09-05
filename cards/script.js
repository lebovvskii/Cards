const URL = "https://fakestoreapi.com/products"

async function getProducts() {
    const response = await fetch(URL);
    return await response.json();
}

const renderCards = (products) => {
    const section = document.getElementById("cards-section")
    const cardElems = products.map(product => `
        <div class="product-card">
            <h2 class="product-card__title">${product.title}</h2>
            <img class="product_card__img" src="${product.image}"/>
            <p class="product-card__description">${product.description}</p>
        </div>
    `)
    section.innerHTML = cardElems.join("");
}

const init = async () => {
    const products = await getProducts();
    renderCards(products)
}

init()
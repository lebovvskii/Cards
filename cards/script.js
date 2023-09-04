const URL = "https://fakestoreapi.com/products"

async function getProducts() {
    const response = await fetch(URL);
    return await response.json();
}

const renderCards = (products) => {
    for (let i = 0; i < products.length; i++) {
        const section = document.getElementById("cards-section")
        section.innerHTML += `
            <div class="product-card">
                <h2 class="product-card__title">${products[i].title}</h2>
                <img class="product_card__img" src="${products[i].image}" />
                <p class="product-card__description">${products[i].description}</p>
            </div>
        `;
    }
}

const init = async () => {
    const products = await getProducts();
    renderCards(products)
}

init()
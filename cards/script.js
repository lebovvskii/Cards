const URL = "https://fakestoreapi.com/products"

async function getProducts() {
    const response = await fetch(URL);
    return await response.json();
}

const layout = (products) => {
    const section = document.getElementById("cards-section");
    for (let i = 0; i < products.length; i++) {
        const newDiv = document.createElement("div");   
        const newTitle = document.createElement("h2");
        const newImg = document.createElement("img");
        const newParagraph = document.createElement("p");
        newDiv.className = "product-card";
        newParagraph.className = "product-card__description" ;
        newImg.className = "product_card__img"
        newTitle.className = "product-card__title"
        section.appendChild(newDiv);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newParagraph);
        newTitle.innerText = products[i].title;
        newImg.src = products[i].image;
        newParagraph.innerText = products[i].description
    }
}

const init = async () => {
    const products = await getProducts();
    layout(products)
}

init()
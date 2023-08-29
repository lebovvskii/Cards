const URL = 'https://fakestoreapi.com/products'

fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))


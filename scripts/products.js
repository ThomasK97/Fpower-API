const url = "https://www.flowerp.online/wp-json/wc/store/products";
fetch(url)

.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    allProducts(data);
})
.catch((error) => {
    console.error('Error', error);
})


const output = document.querySelector("#products");
function allProducts (products) {
    let myProducts = "";
    for (let product of products) {
        console.log(product);
        myProducts += `
        <li>
            <a href="product.html?id=${product.id}">
            <img src="${product.images[0].src}" alt=${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price_html}</p>

                
                
                
            </a>
        </li>`;
    }
    output.innerHTML = myProducts;
}
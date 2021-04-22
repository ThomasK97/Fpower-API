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
                ${product.images}
                ${product.name}
                ${product.price_html}
                
                
                
            </a>
        </li>`;
    }
    output.innerHTML = myProducts;
}
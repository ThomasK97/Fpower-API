const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');

const url = `https://www.flowerp.online/wp-json/wc/store/products/${id}`;
fetch(url)
.then(response => response.json())
.then(data => {
//console.log('Success:', data);
displayProduct(data);
})
.catch((error) => {
console.error('Error:', error);
});
const output = document.querySelector("#product");
function displayProduct (data) {
let content = `
<li>
            <a href="product.html?id=${data.id}">
            <img src="${data.images[0].src}" alt=${data.name}">
            <h2>${data.name}</h2>
            <p>${data.price_html}</p>
            <p>${data.short_description}</p>
            <input type="number" value="1"></input>
            <button class="greyButton">${data.add_to_cart.text}</button>
            <h3>Description</h3>
            <p>${data.description}</p>
            

                
                
                
            </a>
        </li>
`;
output.innerHTML = content;
document.title = title;
}
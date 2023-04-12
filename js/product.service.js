




let productsListUrl = './product.json';


async function loadProducts(productsListUrl) {
    fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;
            let cards = '';
            products.forEach(product => {
                let isNewDiv = '';
                if (product.isNew === 'TRUE') {
                    isNewDiv = `<div class="new-product">
 <span>New</span>
 </div>`;
                }
                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 6; i++) {
                    if (i <= ratings) {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }
                cards = cards +
                    `<section class="first-section">  
                <div class="prod1">
                <img src="images/${product.imageName}.png" alt="" class="image">
                    <div class="icons">
                       <img class="cart" src="./images/cart.png" alt="">
                        <img class="view" src="./images/view.png" alt="">
                        <img class="wishlist" src="./images/wishlist.png" alt="">
                    </div>
                    <div class="content">
                        <p><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star low-star"></i>
                            <i class="fa fa-star-o"></i></p>
                        <h4><a href="#">${product.name}</a></h4>
                     <h3>$40.00 <strike>$60..00</strike></h3> <font size="-1">
                      <h4>(60%OFF)</h4><font>
                      <button id="aadtocart"onclick="addTocart(${product.id})">add to cart</button>
                      <button id="addtowishlist" onclick="addTowishlist(${product.id})">add to wishlist</button>
                    </div>
                </div>
                </section>`;
            });
            document.querySelector('#productsListArea').innerHTML = cards;
        });
}
loadProducts(productsListUrl);


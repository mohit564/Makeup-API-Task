(async () => {
  try {
    const container = document.querySelector(".container");
    const loader = document.querySelector("#loading");
    loader.classList.add("display");

    const data = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const products = await data.json();

    loader.classList.remove("display");

    products.forEach((product) => {
      const card = `
      <div class="card">
        <img class="product-image" src='${product["api_featured_image"]}' alt='${product["name"]}'>
        <div class="card-content">
          <p class="product-brand">${product["brand"]}</p>
          <h2 class="product-name">${product["name"]}</h2>
          <div class="product-description"><p>${product["description"]}</p></div>
          <div class="card-footer">
            <p class="product-price">${product["price"]}</p>
            <a class="product-link" href='${product["product_link"]}'>BUY</a>
          </div>
        </div>
      </div>
      `;
      container.insertAdjacentHTML("beforeend", card);
    });
  } catch (error) {
    console.log("Error : ", error);
  }
})();

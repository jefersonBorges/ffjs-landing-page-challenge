const productPage = document.querySelector('#product-selection')
let address = productApi.initialUrl

const loadProducts = () => {
  productApi.getProducts(address)
    .then(response => {
      address = `https://${response.nextPage}`
      return response.products
    })
    .then(products => products.map(convertProductToCard))
    .then(productCardsArray => {
      productCardsArray.forEach( productCard => {
        productPage.innerHTML += productCard
      });
    })
}

const convertProductToCard = (product) => {
  const newProduct = new Product(
    product.image,
    product.name,
    product.description,
    convertToBrlCurrency(product.oldPrice),
    convertToBrlCurrency(product.price),
    product.installments.count,
    convertToBrlCurrency(product.installments.value)
  )

  return (
    `<article class="product-card">
      <img class="product-image" src="${newProduct.image}" alt="product-image">
      <div class="product-info">
        <h4 class="product-name title-4">${newProduct.name}</h4>
        <p class="product-description product-text">
          ${newProduct.description}
        </p>
        <div class="product-pricing">
          <p class="old-price smaller-2">De: ${newProduct.oldPrice}</p>
          <strong class="current-price strong-2">Por: ${newProduct.price}</strong>
          <p class="installments smaller-2">ou ${newProduct.installments.count}x de ${newProduct.installments.value}</p>
        </div>
        <button class="button" type="button">Comprar</button>
      </div>
    </article>`
  )
}

const convertToBrlCurrency = (value) => {
  const options = {
    style: "currency",
    currency: "BRL"
  }
  return value.toLocaleString("pt-BR", options)
}

loadProducts()
document.querySelector('#more-products').addEventListener('click', loadProducts)
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
      productPage.innerHTML += productCardsArray.join('')
    })
}

const convertProductToCard = (product) => {
  const options = {
    style: "currency",
    currency: "BRL"
  }
  return (
    `<article class="product-card">
      <img class="product-image" src="${product.image}" alt="product-image">
      <div class="product-info">
        <h4 class="product-name title-4">${product.name}</h4>
        <p class="product-description product-text">
          ${product.description}
        </p>
        <div class="product-pricing">
          <p class="old-price smaller-2">De: ${product.oldPrice.toLocaleString("pt-BR", options)}</p>
          <strong class="current-price strong-2">Por: ${product.price.toLocaleString("pt-BR", options)}</strong>
          <p class="installments smaller-2">ou ${product.installments.count}x de ${product.installments.value.toLocaleString("BR", options)}</p>
        </div>
        <button class="button" type="button">Comprar</button>
      </div>
    </article>`
  )
}

loadProducts()
document.querySelector('#more-products').addEventListener('click', loadProducts)

const Landing_page = {
  init() {
    this.bindEvents()
    
  },

  cacheSelectors() {

    this.$clientSubscriptionForm = document.querySelector('#client-subscription')
    this.$productsSection = document.querySelector('#products-section')
    this.$products= document.querySelector('#products')
    this.$moreProductsButton = document.querySelector('#more-products')
    this.$friendReferralForm = document.querySelector('#friend-referral')

  },

  bindEvents() {
    window.onload = this.Events.page_load.bind(this)
  },

  Events: {

    //eventos de interação
    //Formulário subscrição
    //botão comprar***depois de tudo pronto***
    //botão carregar produtos
    //Formulário indicação de amigo

    page_load() {

      this.cacheSelectors()

      this.getProducts(this.params.address)
        .then(response => {

          this.updateAddress(response.nextPage) 
          return [...response.products]

        })
        .then(products => {

          products.forEach(product => {
            const card = this.getProductCard(product)
            this.$products.innerHTML += card
          });
        })

    },

    clientSubscriptionForm_submit() {
      e.preventDefault()
      console.log(e)
    },

    moreProducts_click() {

    },

    friendReferralForm_submit(e) {
      e.preventDefault()
      console.log(e)
    },

  },

  async getProducts(address) {
    const response = await fetch(address)
    return response.json()
  },

  updateAddress(newAddress) {
    this.params.address = newAddress
  },

  getProductCard(product) {

    const {
      id,
      image,
      name,
      description,
      oldPrice,
      price,
      installments
    } = product

    const card = (

      `<article class="product-card">
        <img class="product-image" src="${image}" alt="product-image">

        <div class="product-info">

          <h4 class="product-name title-4">${name}</h4>
          <p class="product-description product-text">${description}</p>

          <div class="product-pricing">
            <s class="old-price smaller-2">De: ${this.formatCurrency(oldPrice)}</s>
            <strong class="current-price strong-2">Por: ${this.formatCurrency(price)}</strong>
            <p class="installments smaller-2">ou ${installments.count}x de ${this.formatCurrency(installments.value)}</p>
          </div>
          
          <button class="button" value="${id}" type="submit">Comprar</button>

        </div>
      </article>`

    )
    return card
  },

  formatCurrency(value) {
    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  },

  validateForm() {
    //recebe o formulário e valida os campos
    //utilizável em ambos os formulários
  },

  regex: {
    name: '',
    cpf: '',
    mail: '',
  },

  params: {
    address: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',
  }

}

Landing_page.init()
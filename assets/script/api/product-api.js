const productApi = {
  initialUrl : 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',

  async getProducts(url) {
    const response = await fetch(url)
    return await response.json()
  }
}



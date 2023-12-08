class Product {
  image;
  name;
  description;
  oldPrice;
  price;
  installments;

  constructor(image, name, description, oldPrice, price, installmentsCount, installmentsValue){
    this.image = image;
    this.name = name;
    this.description = description;
    this.oldPrice = oldPrice;
    this.price = price;
    this.installments = {
      count: installmentsCount,
      value: installmentsValue
    }
  }
}
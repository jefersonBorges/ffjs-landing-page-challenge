class Subscription {
  name;
  email;

  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  validateName() {
    return regEx.name.test(this.name)
  }

  validateEmail() {
    return regEx.email.test(this.email)
  }
}

class ClientSubscription extends Subscription {
  cpf;
  gender;

  constructor(name, email, cpf, gender) {
    super(name, email);
    this.cpf = cpf;
    this.gender = gender;
  };

  validateCpf() {
    return regEx.cpf.test(this.cpf)
  }

  validateGender(){
    return regEx.gender.test(this.gender)
  }

}

const regEx = {
  name : /[a-zA-Z]{3,}/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  cpf: /\d{8}/,
  gender : /[a-zA-Z]{3,}/,
}
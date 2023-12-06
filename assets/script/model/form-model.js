class SubscriptionForm {
  name;
  email;

  constructor(nameInput, nameAlert, emailInput, emailAlert){
    this.name = new FormInput(nameInput, nameAlert);
    this.email = new FormInput(emailInput, emailAlert);
  }
  getNameValue(){
    return this.name.getInputValue()
  }
  getEmailValue(){
    return this.email.getInputValue()
  }
}

class ClientSubscriptionForm extends SubscriptionForm {
  cpf;
  gender;

  constructor(nameInput, nameAlert, emailInput, emailAlert, cpfInput, cpfAlert, genderInput, genderAlert){
    super(nameInput, nameAlert, emailInput, emailAlert);
    this.cpf = new FormInput(cpfInput, cpfAlert);
    this.gender = new FormInputRadio(genderInput, genderAlert);
  }
  getCpfValue(){
    return this.cpf.getInputValue()
  }
  getGenderValue(){
    return this.gender.getInputRadioValue()
  }
}
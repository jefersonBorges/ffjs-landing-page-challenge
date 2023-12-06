class FormInput {
  input;
  errAlert;

  constructor(input, errAlert){
    this.input = input;
    this.errAlert = errAlert;
  }
  getInputValue(){
    return this.input.value
  }
  setErrorState(errorState){
    this.input.classList.add(errorState)
    this.errAlert.classList.add(errorState)
  }
  clearErrorState(errorState){
    if(this.input.classList.contains(errorState) && this.errAlert.classList.contains(errorState)){
      this.input.classList.remove(errorState)
      this.errAlert.classList.remove(errorState)
    }
  }
}

class FormInputRadio {
  inputRadio;
  errAlert;

  constructor(input, errAlert){
    this.inputRadio = [...input];
    this.errAlert = errAlert;
  }
  getInputRadioValue(){
    for(let key in this.inputRadio){
      if(this.inputRadio[key].checked){
        return this.inputRadio[key].value
      }
    }
    return ''
  }
  setErrorState(errorState){
    for(let key in this.inputRadio){
      this.inputRadio[key].classList.add(errorState)
    }
    this.errAlert.classList.add(errorState)
  }
  clearErrorState(errorState){
    for(let key in this.inputRadio){
      if(this.inputRadio[key].classList.contains(errorState)){
        this.inputRadio[key].classList.remove(errorState)
      }
    }
    if(this.errAlert.classList.contains(errorState)){
      this.errAlert.classList.remove(errorState)
    }
  }
}
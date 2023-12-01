const init = () => {
  bindEvents()
}

const clientSubscriptionForm = {

  name: {
    input: document.querySelector('#client-name'),
    errAlert: document.querySelector('#client-name-error')
  },
  email: {
    input: document.querySelector('#client-email'),
    errAlert: document.querySelector('#client-email-error'),
  },
  cpf: {
    input: document.querySelector('#client-cpf'),
    errAlert: document.querySelector('#client-cpf-error')
  },
  gender: {
    input: [...document.querySelectorAll('[name="client-gender"]')],
    errAlert: [document.querySelector('#client-gender-error')]
  },
}

const bindEvents = () => {
  document.querySelector('#client-subscription').addEventListener('submit', validateClientSubscription)
}

const validateClientSubscription = (e) => {
  e.preventDefault()

  const clientSubscription = new ClientSubscription(
    clientSubscriptionForm.name.input.value,
    clientSubscriptionForm.email.input.value,
    clientSubscriptionForm.cpf.input.value,
    getRadioValue(clientSubscriptionForm.gender.input)
  )

  const validName = clientSubscription.validateName()
  const validEmail = clientSubscription.validateEmail()
  const validCpf = clientSubscription.validateCpf()
  const validGender = clientSubscription.validateGender()

  const valid = [validName, validEmail, validCpf, validGender]

  if(valid.includes(false)){

    if(!validName){
      addErrorState(clientSubscriptionForm.name)
    } else {
      removeErrorState(clientSubscriptionForm.name)
    }
  
    if(!validEmail){
      addErrorState(clientSubscriptionForm.email)
    } else {
      removeErrorState(clientSubscriptionForm.email)
    }
  
    if(!validCpf){
      addErrorState(clientSubscriptionForm.cpf)
    } else {
      removeErrorState(clientSubscriptionForm.cpf)
    }
  
    if(!validGender){
      for (const key in clientSubscriptionForm.gender) {
        addErrorState(clientSubscriptionForm.gender[key])
      }
    } else {
      for (const key in clientSubscriptionForm.gender) {
        removeErrorState(clientSubscriptionForm.gender[key])
      }
    }
    
  } else {
    e.srcElement.submit()
  }
}

const getRadioValue = (radioGroupElements) => {
  for(const option of radioGroupElements){
    if(option.checked){return option.value}
  }
  return ''
}

const addErrorState = (elements) => {
  for(const key in elements) {
    elements[key].classList.add('danger')
  }
}

const removeErrorState = (elements) => {
  for(const key in elements) {
    if(elements[key].classList.contains('danger')){
      elements[key].classList.remove('danger')
    }
  }
}

init()
const validateClientSubscription = (e) => {
  e.preventDefault()

  const clientSubscriptionForm = new ClientSubscriptionForm(
    document.querySelector('#client-name'),
    document.querySelector('#client-name-error'),
    document.querySelector('#client-email'),
    document.querySelector('#client-email-error'),
    document.querySelector('#client-cpf'),
    document.querySelector('#client-cpf-error'),
    document.querySelectorAll('[name="client-gender"]'),
    document.querySelector('#client-gender-error')
  )
  const clientSubscription = new ClientSubscription(
    clientSubscriptionForm.getNameValue(),
    clientSubscriptionForm.getEmailValue(),
    clientSubscriptionForm.getCpfValue(),
    clientSubscriptionForm.getGenderValue(),
  )
  const valid = clientSubscription.validateAll()
  console.log(valid)
  if(mapContainsFalse(valid)){
    manageValidStates(clientSubscriptionForm, valid)
  } else {
    e.srcElement.submit()
  }
}

const  validateFriendSubscription = (e) => {
  e.preventDefault()

  const friendSubscriptionForm = new SubscriptionForm(
    document.querySelector('#friend-name'),
    document.querySelector('#friend-name-error'),
    document.querySelector('#friend-email'),
    document.querySelector('#friend-email-error')
  )
  const friendSubscription = new Subscription(
    friendSubscriptionForm.getNameValue(),
    friendSubscriptionForm.getEmailValue(),
  )
  const valid = friendSubscription.validateAll()

  if(mapContainsFalse(valid)){
    manageValidStates(friendSubscriptionForm, valid)
  } else {
    e.srcElement.submit()
  }
}

const manageValidStates = (subscriptionForm, validationMap) => {
  validationMap.forEach((value, key, map) => {
    if(value === false){
      subscriptionForm[key].setErrorState('danger')
    } else {
      subscriptionForm[key].clearErrorState('danger')
    }
  })
}

const mapContainsFalse = (map) => {
  return [...map.values()].includes(false)
}

document.querySelector('#client-subscription').addEventListener('submit', validateClientSubscription)
document.querySelector('#friend-referral').addEventListener('submit', validateFriendSubscription)
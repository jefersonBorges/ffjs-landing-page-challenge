# Landing Page Challenge - Formação Full Stack Javascript

This is a solution for the landing page challenge on the Formação Full Stack Javascript course. It displays a landing page with a newsletter form and a product section.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
    - [Design](#design)
    - [Page Behavior](#page-behavior)
    - [Challenge Evaluation Criteria](#challenge-evaluation-criteria)
  - [Screenshot](#screenshot)
    - [Mobile](#mobile)
    - [Desktop](#mobile)
  - [Links](#links)
- [Setup](#setup)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge consists on developing a landing page containing a product grid and a newsletter form. you can find the original challenge instructions [here](https://github.com/thiagocontaparatestes/testes-vaga-emprego/blob/main/teste-html-css-js.md). For practical reasons, I have summarized the rules of the challenge below.

#### Design

The implemented design must be according to the following mock:

- [Layout Mock Link](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614)

#### Page Behavior

- [API Endpoint Link](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)
  - Each page of the API return 8 product infos and a link to the next page.
  - For each product, a card must be presented on the products section grid.
  - By clicking on the "Ainda Mais Produtos Aqui!" button the eight products of the next page must be added after the first eight loaded.
- Input fields on the forms must be validated according to their content (Ex: e-mail must be valid e-mail address).

#### Challenge Evaluation Criteria

- HTML, CSS and JavaScript only!
- Significant commits
- System architecture and organization
- Knowledge of responsiveness
- Modularity and reusability
- Good programming practices

### Screenshot

#### Mobile

![Mobile Screenshot](./screenshot/mobile-screenshot.gif)

#### Desktop

![Desktop Screenshot](./screenshot/desktop-screenshot.gif)
![Desktop Screenshot active page sections](./screenshot/desktop-screenshot-sections.gif)
![Desktop Screenshot validation](./screenshot/desktop-screenshot-validation.gif)

### Links

- Solution URL: [Github repository](https://github.com/jefersonBorges/ffjs-landing-page-challenge)
- Live Site URL: [Github live page](https://jefersonborges.github.io/ffjs-landing-page-challenge/)

## Setup

To run this project, simply download the files and open the "index.html" file with your internet browser, or click on the [live site url](https://jefersonborges.github.io/ffjs-landing-page-challenge/).

### Usage

Here's an improved version of the list:

**Interactive Elements:**

- **Header Buttons:**
  - **"Ajude o Algoritmo"** - Link to the client subscription section
  - **"Seus Produtos"** - Link to the products section
  - **"Compartilhe"** - Link to the friend subscription section

- **Client Subscription Form:**
  - Input Fields - Enter the required data (name, email, CPF, gender)
  - **"Enviar"** Button - Submit the form

- **Products Section:**
  - Product Cards - Display product information
  - **"Ainda mais produtos aqui!"** Button - Load additional products onto the page

- **Friend Subscription Form:**
  - Input Fields - Provide the required data (name, email)
  - **"Enviar Agora"** Button - Submit the form

## My process

### Built with

- **HTML** semantic Markup
- **CSS**
  - Mobile-first
  - Flexbox
  - Grid
- **Javascript**
  - OOP
  - ES6 Features
  - Async
  - Event Handling
  - DOM
  - Client-side form validation

### What I learned

- CSS Grid auto-fit and image aspect-ratio [Learn how to create a responsive CSS grid layout](https://www.youtube.com/watch?v=sKFW3wek21Q)

- Client-side Form validation [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

- Working with Java Classes [Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)

### Continued development

Before adopting Object-Oriented Programming (OOP), I initially experimented with functional programming exclusively for validating and loading products in the designated section. However, this approach led to verbose code. By incorporating a combination of OOP and functional programming, I successfully minimized the codebase and crafted a more modular and efficient solution.

### Useful resources

For the validation process and product section loading, I employed JavaScript classes to enhance code organization, resulting in a more modular and scalable project structure.

The following code sections exemplify the integration of Object-Oriented Programming (OOP) principles and functional programming techniques with the Document Object Model (DOM). This segment, in particular, delineates the behavior of the radio input section, comprising both the input and alert error message.

```js

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

```

Building the forms:

```js

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

```

To get the input values and validate them, I used OOP again:

```js

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
  validateAll(){
    const valid = new Map()
    return valid
      .set('name', this.validateName())
      .set('email', this.validateEmail())
      .set('cpf', this.validateCpf())
      .set('gender', this.validateGender())
  }
}

```

## Author

- GitHub - [jefersonBorges](https://github.com/jefersonBorges/jefersonBorges)
- Frontend Mentor - [@jefersonBorges](https://www.frontendmentor.io/profile/jefersonBorges)
- Linkedin - [Jeferson Borges Linkedin](https://www.linkedin.com/in/jeferson-borges-543b34229)

---

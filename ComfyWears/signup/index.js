let form = document.querySelector('.form')
let fullName = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector("#password")
let cpassword = document.querySelector("#cpassword")
let formControl = document.querySelectorAll('.form_control')
let successMsg = document.querySelector('.success_msg')


form.addEventListener('submit', validateForm)

function validateForm(e){
  e.preventDefault()
// console.log(e)
  let fullNameVal = fullName.value.trim()
  
  let emailVal = email.value.trim()
 let passwordVal = password.value.trim()

let cpasswordVal = cpassword.value.trim()
  // console.log(fullNameVal)

  checkName(fullNameVal)
  checkEmail(emailVal)
  checkPassword(passwordVal)
  checkCpassword(cpasswordVal)

  let formControl = document.querySelectorAll('.form_control')

  for(let i = 0; i < formControl.length; i ++){
    if(formControl[i].classList.contains('success')){
    var successRate = 0 + i
   if(successRate === 3){
  
  //  email.value = ''
  //  password.value = ''
  //  fullName.value = ''
  //  cpassword.value = ''
  // emoji.textContent = ''
   successMsg.classList.add('show')
   let success_msg_text = successMsg.querySelector('h2')
   success_msg_text.innerText = `You have successfully registered as ${fullNameVal}`
   }
    }

}

}

// 
function checkName(fullNameVal){
  if(fullNameVal === ""){
    setError(fullName, 'Name can not be blank')


  }else if(fullNameVal.length < 5){
    console.log('err')
    setError(fullName, 'Name should have 5 alphabet')
  }
  else{
  setSuccess(fullName)
 
  }
}

function checkEmail(emailVal){

if(emailVal === ''){
  setError(email, 'Email can not be blank')
}else if(!isEmailValid(emailVal)){
  setError(email, 'Email is not qualified')

}else{
  setSuccess(email)
}
}




function checkPassword(passwordVal){
  if(passwordVal === ''){
    setError(password, 'Password can not be blank')
  }else if(!isPasswordSecure(passwordVal)){
    setError(password, 'Password is not qualified')
  
  }else{
    setSuccess(password)
  }
  
}



function checkCpassword(cpasswordVal, passwordVal){

  if(cpasswordVal === ''){
    setError(cpassword, 'Confirm password can not be blank')
  }else if(!cpasswordVal === passwordVal){
    setError(cpassword, 'Confirm password is not matched')
  
  }else{
    setSuccess(cpassword)
  }
}

function isEmailValid(emailVal){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailVal)
}
function isPasswordSecure(passwordVal){
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(passwordVal);
}
function setError(inputVal, msg){
  let small = inputVal.parentElement.parentElement.children[2]
  let emoji = inputVal.parentElement.children[1]
  emoji.textContent = '🙁'
small.textContent = msg
  // console.log(input)
}
function setSuccess(inputVal){
  let small = inputVal.parentElement.parentElement.children[2]
  let emoji = inputVal.parentElement.children[1]
  small.textContent = ''
  emoji.textContent = '🙂'

  let formControl = small.parentElement
  let input = formControl.children[1]
 formControl.classList.add('success')
small.textContent = ''
}

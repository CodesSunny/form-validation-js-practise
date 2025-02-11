const ErrorElements = document.querySelectorAll('span');

const form = document.forms.signup;
const formElements = form.elements;

const userData ={
     fullname : formElements.fullname.value,
     age : formElements.age.value,
     male : formElements.male.value,
     female : formElements.female.value,
     mobile : formElements.mobile.value,
     email : formElements.email.value,
     username : formElements.username.value,
     password : formElements.password.value,
     confirmPassword : formElements.confirm_password.value
}

const handleSubmit = (event)=>{
    event.preventDefault();
    
    console.log(userData );
    
}


const handleInput =()=>{
    // let value = formElements.value;
    // console.log(value);
    
}


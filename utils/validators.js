module.exports.validateRegisterInput=(
    username,
    email,
    password,
    confirmPassword
)=>{
    const errors={};
    if(username.trim()===''){
        errors.username='Username must not be empty'
    }
    if(email.trim()===''){
        errors.email='Email must not be empty'
    } else{
        const regEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.match(regEx)){
            errors.email="Email address must be valid"
        }
    }
    if(password===''){
        errors.password='Password must not be empty'
    }
    else if(password !== confirmPassword){
        errors.confirmPassword="Password must be same"
    }
    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}
module.exports.validateLoginInput=(username,password)=>{
    const errors={};
    if(username.trim()===''){
        errors.username='Username must not be empty'
    }
    if(password.trim()===''){
        errors.password='Password must not be empty'
    }
    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}

const validate =  (data) =>{
    let message ='';
    if(data.name === "" || data.email === "" || data.password  === ""){
        message = "Please fill all required fields";
        return {message, valid: false}
    }

   
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
        
    if(data.email.search(pattern)  === -1 ){
        message = "Please Enter Valid Email ";
        return {message, valid: false}
    }

     return {message, valid: true}

}




module.exports = validate;

     



const validate =  (data) =>{
    let message ='';
    if(data.title === "" ){
        message = "Please Enter a  video title";
        return {message, valid: false}
    }

   
    var pattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
        
    if(data.url.search(pattern)  === -1 ){
        message = "Please Enter a valid Url ";
        return {message, valid: false}
    }

     return {message, valid: true}

}


module.exports = validate;

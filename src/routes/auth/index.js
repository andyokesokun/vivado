
const router = require('express').Router();
const userValidation = require('../../validations/userValidation');

const  middleWare = require('../../middleware')



router.get('/login', middleWare.authCheckLoggedIn, (req, res) => {
    
    if(req.session.IsLoggedIn ) res.redirect('/dashboard')

    res.render(
        'login',
        {authError: req.session.authError}
    )
} )


router.post('/login', (req, res) => {
      
    var {username, password} =  req.body;  
    var user = db.model.users.find( x => x.email  === username  && x.password === password )

    if(!user) {
       req.session.authError = "Invalid UserName and Password"
       res.redirect('login')
    }

     req.session.user = {name: user.name,  email: user.email}
     req.session.IsLoggedIn = true
     res.redirect('/video/dashboard')

    
} )



router.get('/register' , middleWare.authCheckLoggedIn, (req, res)  =>{
    
    if(req.session.IsLoggedIn) res.redirect('/dashboard')

    console.log(req.session.user)
    res.render(
        'register',
        {error: req.session.error, 
         userData: req.session.user,  
        }
    )
} )


router.post('/register' , (req, res)  =>{     
    
   var validation =  userValidation(req.body);

    if(!validation.valid){

        req.session.user = req.body
        req.session.error = validation.message
        res.redirect('register')
    }
    
    db.model.users.push(req.body);
    db.update();

    res.render('accountCreated')
        
  
} )


router.get('/logout',  (req, rep) => {

     req.session.destroy( (err) => {
        
        if(err) rep.send('Could not clear session');

        rep.redirect('index')   

     });

})


module.exports = router
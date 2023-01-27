const   authCheckNotLoggedIn  = (req, resp, next) =>{
    if(!req.session.IsLoggedIn)  resp.redirect('/auth/login')
    next()
}

const   authCheckLoggedIn  = (req, resp, next) =>{
    if(req.session.IsLoggedIn)  resp.redirect('/video/dashboard') 
    next()
}


module.exports = {authCheckLoggedIn, authCheckNotLoggedIn}
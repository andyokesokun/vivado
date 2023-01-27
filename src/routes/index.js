const router = require('express').Router();

const authRoutes = require('./auth')
const videoRoutes = require('./video')

const  middleWare = require('../middleware')



router.get('/', middleWare.authCheckLoggedIn, (req , resp) => {
    resp.render('index')      
})



router.use('/auth', authRoutes);
router.use('/video', middleWare.authCheckNotLoggedIn, videoRoutes);


module.exports = router
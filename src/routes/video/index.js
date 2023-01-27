const router = require('express').Router();
const  middleWare = require('../../middleware')

const videoValidation = require('../../validations/videoUploadValidation')
const  videoFilters = require('../../consts').videoFilters 



router.get('/dashboard', (req , resp) => {
   

    resp.render(
        'dashboard',
        {user: req.session.user, videoFilters: [videoFilters.ALL, videoFilters.MINE] }
    )
})



router.get('/new_video' , (req , resp) => {
   
    resp.render(
        'new_video',
        {message: req.session.message, user: req.session.user }
    )
})


router.post('/new' , (req , resp) => {
   
    const validate = videoValidation(req.body);
 

    if(validate.valid) {
        
        db.model.user_videos.push(
                     { email: req.session.user.email, 
                       title: req.body.title,
                       url: req.body.url

                     }
                    )
        db.update();
       
        req.session.message ="Video uploaded Successfully"
      
   
    }else{
        req.session.message = validate.message
    }

    req.session.IsLoggedIn = true
    req.session.user =  req.session.user
    resp.redirect('new_video');

    
})


router.get('/dashboard/:videofilter' , (req , resp) => {
      
     const filter = req.params.videofilter;

     var videos;

     if(filter === videoFilters.MINE ){
      
        videos = db.model.user_videos.filter( x =>  x.email === req.session.user.email)   

        console.log(videos);

     }else{
        videos = db.model.user_videos
     }
     
     resp.render(
          'video_list',
          {videos, user: req.session.user}
     )

})

module.exports = router


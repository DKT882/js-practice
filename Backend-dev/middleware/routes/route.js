const express=require('express')
const router=express.Router()

const port=3000

//middleware

// checking user is authrized or not
const auth=function(req,res,next){
    console.log('i am inside auth middleware')
    req.user={
        userID:1,
        role:'student'
    }
    if (req.user) {
        next()
    }
    else{
        res.json({
            success:false,
            message:'Your are not an user'
        })
    }
    
}
// checking user is student or not
const isStudent = function(req,res,next){
    console.log('i am inside isStudent middleware')
    if (req.user.role=='student') {
        next()
    }
    else{
        res.json({
            success:false,
            message:'access denied, this route only for student'
        })
    }
}
// checking user is admin or not
const isAdmin = function (req,res,next) {
    console.log('i am inside isAdmin middleware')
    if (req.user.role=='admin') {
        next()
    }
    else{
        res.json({
            success:false,
            message:'access denied, this route only for Admins'
        })
    }
}

router.get('/student',auth,isStudent,(req,res) => {
    console.log('i am inside student route')
    res.send('student specific page only')
})

router.get('/admin',auth,isAdmin,(req,res) => {
    console.log('i am inside admin route')
    res.send('admin dashboard specific page only')
})

// router.listen(port,() => {
//     console.log('this is .listen')
// })

module.exports = router;
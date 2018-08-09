import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('../view/index.ejs')
})
router.get('/list',(req,res)=>{
    res.render('../view/list.ejs')
})
router.get('/details/:id',(req,res)=>{
    res.render('../view/details.ejs',{id:req.params.id})
})
router.get('/login',(req,res)=>{
    res.render('../view/login.ejs')
})
router.get('/register',(req,res)=>{
    res.render('../view/register.ejs')
})

export default router
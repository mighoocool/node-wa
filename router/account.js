import express from 'express'
import db from '../mysql/db'
import Account from '../controller/account/account'

const router = express.Router()

// router.post('/login',(req,res)=>{
//     // console.log(req.url)
//     console.log(req.body)
//     db.query(`SELECT * FROM user_center WHERE user_name = "${req.body.username}" AND password = "${req.body.password}" AND del_flag = "0"`,(err,result)=>{
//         console.log(err)
//         console.log(result)
//         if(err){
//             res.redirect('/static/404.html')
//         }else {
//             if(result[0]){
//                 // res.redirect('/')
//                 res.json(result[0])
//             }else {
//                 res.redirect('/static/404.html')
//             }
//         }
//     })
// })
router.post('/login',Account.login)
router.post('/register',Account.register)

export default router
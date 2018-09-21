// const express = require('express')
// const router = express.Router()
import home from './home'
import account from './account'
import spider from './spider'

// const setRouter = (app) =>{
//     app.use('/',home)
// }

export default (app) =>{
    app.use('/',home)
    app.use('/account',account)
    app.use('/spider',spider)
}

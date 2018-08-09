// const express = require('express')
import express from 'express'
import router from './router/index'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import db from './mysql/db'
import logger from 'morgan'

//创建express实例
const app = express()

//中间件
//静态资源中间件
app.use('/static',express.static('public/static'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false}))  //parse application/x-www-form-urlencoded
app.use(bodyParser.json())  //parse application/json
app.use(logger('dev'))

//设置路由
router(app)

//404
app.get('*',(req,res)=>{
    res.redirect('/static/404.html')
})

//模板引擎
app.set('view engine','ejs')

 
const server = app.listen(8081,()=>{
    const host = server.address().address
    const port = server.address().port
    console.log('listening http://%s:%s',host,port)
})
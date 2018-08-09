import queryAccountModel from '../../model/account/queryAccount'
import loginModel from '../../model/account/login'
import registerModel from '../../model/account/register'
import omit from 'lodash/omit'
import moment from 'moment'

class Account {
    async login(req,res,next){
        if(req.body.username && req.body.password){
            const result = await queryAccountModel(req.body.username , req.body.password).catch(err=>{
                res.json({
                    code:'1',
                    message:err
                })
            })
            if(result[0]){
                const loginResult = await loginModel(req.body.username , req.body.password).catch(err=>{
                    console.log(err)
                    res.json({
                        code:'1',
                        message:'系统异常'
                    })
                })
                if(loginResult[0]){
                    res.json({data:{...omit(loginResult[0],['password','del_flag'])},code:'200'})
                }else {
                    res.json({
                        code:'202',
                        message:'密码错误'
                    })
                }
            }else{
                res.json({
                    code:'201',
                    message:'用户不存在'
                })
            }
        }else {
            res.json({
                code:'400',
                message:'请输入用户名密码'
            })
        }
    }
    async register (req,res,next){
        if(!req.body.username) {
            res.json({
                code:'400',
                message:'请输入用户名'
            })
            return 
        }
        if(!req.body.password) {
            res.json({
                code:'400',
                message:'请输入密码'
            })
            return 
        }
        const hasAccount = await queryAccountModel(req.body.username , req.body.password).catch(err=>{
                res.json({
                    code:'1',
                    message:err
                })
            })
        if(hasAccount){
            res.json({
                code:'203',
                message:'用户已存在'
            })
        }else{
            const result = await registerModel(req.body.username , req.body.password,moment().format('YYYY-MM-DD HH:mm:ss'),'pc').catch(err=>{
                res.json({
                    code:'1',
                    message:err
                })
            })
            res.json({
                code:'200',
                message:'success'
            })
        }
    }
}

export default new Account()
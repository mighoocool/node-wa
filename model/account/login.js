import db from '../../mysql/db'
/**
 * 
 * 
 * @param {string} username     用户名
 * @param {string} password     密码
 * @returns 
 */
const queryAccount = (username,password) =>{
    return new Promise((resolve,reject)=>{
        db.query(`SELECT * FROM user WHERE user_name = "${username}"  AND password="${password}" AND del_flag = "0"`,(err,result)=>{
            if(err){
                console.log(err)
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

export default queryAccount
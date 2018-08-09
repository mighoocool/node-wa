import db from '../../mysql/db'
/**
 * 
 * 
 * @param {string} username 
 * @param {string} password 
 * @param {string} create_date 
 * @param {string} platform 
 * @returns 
 */
const register = (username,password,create_date,platform) =>{
    return new Promise((resolve,reject)=>{
        db.query(`INSERT INTO user (user_name,password,create_date,register_platform) VALUES ('${username}','${password}','${create_date}','${platform}') `,(err,result)=>{
            if(err){
                console.log(err)
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

export default register
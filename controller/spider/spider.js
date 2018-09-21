import cheerio from 'cheerio'
import sa from 'superagent'


class Spider {
    constructor(arg){
        super(arg)
        this.
    }
    async search(req,res,next){
        // if(req.body.paramsStart && req.body.paramsEnd){
        if(req.body.url ){
            sa.get(req.body.url).end((err,pres)=>{
                const $ = cheerio.load(pres.text)
                const title = $('.note-header h1').text()
                res.json({
                    code:'200',
                    message:'success',
                    data:{
                        title:title
                    }
                })
            })
        } else {
            res.json({
                code:'400',
                message:'参数错误'
            })
        }
    }
}

export default new Spider()
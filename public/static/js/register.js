layui.use('form',()=>{
    const form = layui.form
    form.on('submit(formRegister)',(data)=>{
        console.log(data)
        if(data.field.password === data.field.password1){
            layer.msg(JSON.stringify(data.field));
            $.ajax({
                type:'POST',
                url:'/account/register',
                data:data.field,
                dataType:'json',
                success:(res)=>{
                    console.log(res)
                },
                error:(e)=>{
                    console.log(e)
                }
            })
        }else {
            
        }
        return false;
    })
})

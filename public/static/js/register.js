layui.use('form',()=>{
    const form = layui.form
    form.on('submit(formRegister)',(data)=>{
        console.log(data)
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
        return false;
    })
})

$('#register-form').submit(e=>{
    console.log(e)
    e.preventDefault()
})
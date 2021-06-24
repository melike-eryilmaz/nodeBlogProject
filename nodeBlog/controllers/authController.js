const login_get = (req,res)=>{
    res.render('login',{title:'Giriş'})
}

const login_post = (req,res)=>{}
const signup_get = (req,res)=>{
    res.render('signup',{title:"Kayıt Ol"})
}
const signup_post = (req,res)=>{}
const logout_get = (req,res)=>{}


module.exports ={
    login_get,
    login_post,
    signup_get,
    signup_post,
    logout_get
}
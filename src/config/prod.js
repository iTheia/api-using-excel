const prodConfig ={
    port: process.env.PORT || 8080,
    database: {
        user:'',
        password:''
    },
    secret:{
        TOKEN: process.env.TOKEN
    }
}

export default prodConfig

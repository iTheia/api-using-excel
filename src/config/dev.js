const devConfig ={
    port: process.env.PORT || 5000,
    database: {
        user:'',
        password:''
    },
    secret:{
        TOKEN: process.env.TOKEN
    }
}

export default devConfig
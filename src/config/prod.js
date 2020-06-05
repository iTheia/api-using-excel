const prodConfig ={
    port: process.env.PORT || 8080,
    database: {
        host:'localhost',
        user:'root',
        password:'',
        database:'db'
    },
    secret:{
        TOKEN: process.env.TOKEN
    }
}

export default prodConfig

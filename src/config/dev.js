const devConfig ={
    port: process.env.PORT || 5000,
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

export default devConfig
const devConfig ={
    port: process.env.PORT || 5000,
    database: {
        host:'localhost',
        user:'root',
        password:'',
        database:'db'
    },
    secret:{
        TOKEN: 'un token jaja xD'
    }
}

export default devConfig
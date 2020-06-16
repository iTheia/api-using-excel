const devConfig = {
    port: process.env.PORT || 5000,
    // database: {
    //     host:'localhost',
    //     user:'root',
    //     password:'',
    //     database:'db'
    // },

    database: {
        user: 'system',
        password: 'AdminOracle15',
        connectString: 'localhost/ORACLETEST'
    },
    secret: {
        TOKEN: 'un token jaja xD'
    }
}

export default devConfig
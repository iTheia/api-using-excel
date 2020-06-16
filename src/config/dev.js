const devConfig = {
    port: process.env.PORT || 5000,
    database: {
        user:'system',
        password:'AdminOracle15',
        ConnectString:'localhost/ORACLETEST'
    },
    secret: {
        TOKEN: 'un token jaja xD'
    }
}

export default devConfig
import devConfig from './dev'
import prodConfig from './prod'

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

const env = process.env.NODE_ENV
let envConfig ={
    
}
switch (env) {
    case 'development':
    case 'dev':
        envConfig = devConfig
        break;
    case 'production':
    case 'prod':
        envConfig = prodConfig
        break;
    default:
        envConfig = devConfig
        break;
}

export default envConfig
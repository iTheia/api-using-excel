import devConfig from './dev'
import prodConfig from './prod'
import testConfig from './test'

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

const env = process.env.NODE_ENV
let envConfig = {

}
switch (env) {
    case 'development':
    case 'dev':
        envConfig = devConfig
        break;
    // case 'test':
    //     envConfig = testConfig
    //     break;
    case 'production':
    case 'prod':
        envConfig = prodConfig
        break;
    default:
        envConfig = testConfig
        break;
}

export default envConfig
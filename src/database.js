import mysql from 'mysql'
import appConfig from './config'

const connection = async (config = appConfig) =>{
  try {
    return mysql.createConnection(config.database)
  } catch (error) {
    console.log(error)
  }
  
}
export default connection
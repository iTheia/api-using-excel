import mysql from 'mysql'
import appConfig from './config'

const connection = async () =>{
  try {
    return mysql.createConnection(appConfig.database)
  } catch (error) {
    console.log(error)
  }
  
}
export default connection
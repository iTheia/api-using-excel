//import mysql from 'mysql'
const oracledb = require('oracledb');
import appConfig from './config'

const connection = async () =>{
  try {
    
    return oracledb.getConnection(appConfig.database)
    
  } catch (error) {
    console.log(error)
  }
  
}
export default connection
import mysql from 'mysql'
import config from '../config/mysql'
const connection = mysql.createConnection(config.mysql)

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
export default connection
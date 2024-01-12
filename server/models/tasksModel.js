const { Pool } = require('pg');

const PG_URI = 'postgres://wxurormg:UE0n-vDlC3ArFV-rBOfT5PM3AiR2LP8Z@batyr.db.elephantsql.com/wxurormg';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}
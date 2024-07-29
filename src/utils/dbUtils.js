// dbUtil.js
const sql = require('mssql'); // import mssql module
const dbConfig = require('../../dbConfig.qa'); // import database configuration


/**
 * Establish a connection to the database.
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 * @throws {Error} If the connection fails.
 *
 */
async function connectToDatabase() {
    try {
        await sql.connect(dbConfig); // connect to the database using the config
        console.log('Connected to the database'); // log success message
    } catch (err) {
        console.error('Database connection failed: ', err); // log error message
        throw err; // re-throw the error
    }
}

/**
 * Execute a SQL query on the connected database.
 *
 * @param {string} query The SQL query to execute.
 * @returns {Promise<[]>} A promise that resolves with the query result.
 * @throws {Error} If the query execution fails.
 *
 */
async function executeQuery(query) {
    try {
        const result = await sql.query(query); // execute the query
        return result.recordset; // return the query result
    } catch (err) {
        console.error('Query execution failed: ', err); // log error message
        throw err; // re-throw the error
    }
}

module.exports = { connectToDatabase, executeQuery};
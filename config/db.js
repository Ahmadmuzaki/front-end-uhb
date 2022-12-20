import { createPool } from 'mysql'

const pool = createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '',
    database: 'mysql-next'
})

pool.getConnection((err) => {
    if (err) {
        console.log("Not connect");
    } else {
        console.log("Connected");
    }
})

export const executeQuery = (query, arraParams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arraParams, (err, data) => {
                if (err) {
                    console.log("Error in executing the query");
                    reject(err)
                }
                resolve(data)
            })
        } catch (err) {
            reject(err)
        }
    })
}

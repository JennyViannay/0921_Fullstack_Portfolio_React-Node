import connect from '../config/db-config.js';

// GET ALL 
const findAll = () => {
    return new Promise((resolve, reject) => {
        connect.query("SELECT * FROM category", (err, results) => {
            if (err) reject(err)
            else resolve(results)
        })
    })
}

// GET ONE BY ID 
const findOneById = (id) => {
    return new Promise((resolve, reject) => {
        connect.query("SELECT * FROM category WHERE id = ?", id, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

// DELETE
const deleteOneById = (id) => {
    return new Promise((resolve, reject) => {
        connect.query("DELETE FROM category WHERE id = ?", id, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

// CREATE
const create = (category) => {
    return new Promise((resolve, reject) => {
        connect.query("INSERT INTO category (name) VALUES (?)", category, (err, result) => {
            if (err) reject(err)
            else {
                connect.query("SELECT * FROM category WHERE id = ?", result.insertId, (err, res) => {
                    if (err) reject(err)
                    else resolve(res)
                })
            }
        })
    })
}

// UPDATE
const update = (category, id) => {
    return new Promise((resolve, reject) => {
        connect.query("UPDATE category SET name = ? WHERE id = ?", category, (err, result) => {
            if (err) reject(err)
            else {
                connect.query("SELECT * FROM category WHERE id = ?", id, (er, res) => {
                    if (er) reject(er)
                    else resolve(res)
                })
            }
        })
    })
}

export default { findAll, findOneById, deleteOneById, create, update }
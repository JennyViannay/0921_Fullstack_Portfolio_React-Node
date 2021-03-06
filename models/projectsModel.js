import connect from '../config/db-config.js';

// GET ALL 
const findAll = () => {
    return new Promise((resolve, reject) => {
        connect.query("SELECT * FROM project", (err, results) => {
            if (err) reject(err)
            else resolve(results)
        })
    })
}

// GET ONE BY ID 
const findOneById = (id) => {
    return new Promise((resolve, reject) => {
        connect.query("SELECT * FROM project WHERE id = ?", id, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

// DELETE
const deleteOneById = (id) => {
    return new Promise((resolve, reject) => {
        connect.query("DELETE FROM project WHERE id = ?", id, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

// CREATE
const create = (project) => {
    return new Promise((resolve, reject) => {
        connect.query("INSERT INTO project (title, content, created_at, illustration, category_id) VALUES (?, ?, ?, ?, ?)", project, (err, result) => {
            if (err) reject(err)
            else {
                connect.query("SELECT * FROM project WHERE id = ?", result.insertId, (err, res) => {
                    if (err) reject(err)
                    else resolve(res)
                })
            }
        })
    })
}

// UPDATE
const update = (project, id) => {
    return new Promise((resolve, reject) => {
        connect.query("UPDATE project SET title = ?, content = ?, created_at = ?, illustration = ?, category_id = ? WHERE id = ?", project, (err, result) => {
            if (err) reject(err)
            else {
                connect.query("SELECT * FROM project WHERE id = ?", id, (er, res) => {
                    if (er) reject(er)
                    else resolve(res)
                })
            }
        })
    })
}

export default { findAll, findOneById, deleteOneById, create, update }
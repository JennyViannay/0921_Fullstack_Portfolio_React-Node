import express from "express";
import Categories from '../models/categoriesModel.js';
const router = express.Router(); // toutes les url de ce fichier commencent par /categories

// GET ALL 
router.get('/', async (req, res) => {
    try {
        const categories = await Categories.findAll()
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('X-Total-Count', categories.length) 
        res.send(categories)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
});

// GET ONE BY ID
router.get('/:id', async (req, res) => {
    const idCategory = Number(req.params.id)
    try {
        const category = await Categories.findOneById(idCategory)
        category.length > 0 ? res.send({data : { category }}) : res.send("Not found")
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    const idCategory = Number(req.params.id)
    try {
        const category = await Categories.deleteOneById(idCategory)
        res.send(`La categorie numéro ${idCategory} a bien été supprimé`)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
});

// CREATE 
router.post('/', async (req, res) => {
    const newCategory = String(req.body.name)
    try {
        const category = await Categories.create(newCategory)
        res.send(category)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
}); 

// UPDATE
router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const updateCategory = [
        String(req.body.name),
        id
    ];
    try {
        const category = await Categories.update(updateCategory, id)
        res.send(category)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
});

export default router;
import express from "express";
import Projects from '../models/projectsModel.js';
const router = express.Router(); // toutes les url de ce fichier commencent par /projects

// GET ALL 
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.findAll()
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('X-Total-Count', projects.length) 
        res.send(projects)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
});

// GET ONE BY ID
router.get('/:id', async (req, res) => {
    // recoit une requete avec un param
    const idProject = Number(req.params.id)
    try {
        const project = await Projects.findOneById(idProject)
        project.length > 0 ? res.send(project) : res.send("Not found")
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    const idProject = Number(req.params.id)
    try {
        const project = await Projects.deleteOneById(idProject)
        res.send(`Le projet numéro ${idProject} a bien été supprimé`)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
});

// CREATE 
router.post('/', async (req, res) => {
    const newProject = [
        String(req.body.title),
        String(req.body.content),
        String(req.body.created_at),
        String(req.body.illustration),
        Number(req.body.category_id)
    ];
    try {
        const project = await Projects.create(newProject)
        res.send(project)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
}); 

// UPDATE
router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const updateProject = [
        String(req.body.title),
        String(req.body.content),
        String(req.body.created_at),
        String(req.body.illustration),
        Number(req.body.category_id),
        id
    ];
    try {
        const project = await Projects.update(updateProject, id)
        res.send(project)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
});

export default router;
import express from "express";
import Projects from '../../models/projectsModel.js';
const router = express.Router(); // toutes les url de ce fichiers commencent par /projects

// GET ALL 
router.get('/', async (req, res) => {
    // il recoit la requete du client 
    // il doit traiter cette demande en demandant 
    // lui meme à un model de lui retourner tous les projets
    try {
        const projects = await Projects.findAll()
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
    ];
    try {
        const project = await Projects.create(newProject)
    } catch (error) {
        res.status(500).send('Error server, try again !')
    }
}) 

// UPDATE
router.put('/:id', (req, res) => {
    console.log('ici la route update')
}) 

export default router;
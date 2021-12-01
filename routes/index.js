import projectsController from '../controllers/projectsController.js';
import categoriesController from '../controllers/categoriesController.js';

export const setupRoutes = (app) => {
    app.use('/projects', projectsController)
    app.use('/categories', categoriesController)
}
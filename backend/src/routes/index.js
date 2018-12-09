import express from 'express';
import questionsRoutes from './questions';
import statsRoutes from './stats';

const routes = express.Router();

routes.use('/questions', questionsRoutes);
routes.use('/stats', statsRoutes);

export default routes;
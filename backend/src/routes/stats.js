import express from 'express';
import { getStats, updateStats, getAllStats } from '../controllers';

const statsRoutes = express.Router();

statsRoutes.route('/:id')
    .get(getStats)
    .put(updateStats);

statsRoutes.route('/')
    .get(getAllStats)

export default statsRoutes;
import express from 'express';
import { getStats, updateStats } from '../controllers';

const statsRoutes = express.Router();

statsRoutes.route('/:id')
    .get(getStats)
    .put(updateStats);

export default statsRoutes;
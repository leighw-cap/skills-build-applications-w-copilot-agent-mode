import { Router } from 'express';
import Activity from '../models/Activity';

const router = Router();

router.get('/users/', (_req, res) => {
  res.json({ users: [] });
});

router.get('/teams/', (_req, res) => {
  res.json({ teams: [] });
});

router.get('/activities/', async (_req, res) => {
  try {
    const activities = await Activity.find();
    res.json({ activities });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
});

router.get('/leaderboard/', (_req, res) => {
  res.json({ leaderboard: [] });
});

router.get('/workouts/', (_req, res) => {
  res.json({ workouts: [] });
});

export default router;

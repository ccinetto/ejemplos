import { Router } from 'express';
import { MealController } from '../controllers/meals';

export const mealRouter = Router();

mealRouter.get('/menuHTML', MealController.getMenuHTML);
mealRouter.get('/menuJSON', MealController.getMenuJSON);

export default mealRouter;

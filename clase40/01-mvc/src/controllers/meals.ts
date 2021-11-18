import { MealModel } from '../model/meals';
import { Request, Response, NextFunction } from 'express';

class Meal {
  async getMenuHTML(req: Request, res: Response) {
    const meals = await MealModel.find();
    res.render('menu', { meals: meals });
  }

  async getMenuJSON(req: Request, res: Response) {
    const meals = await MealModel.find();
    res.send({
      data: meals,
    });
  }
}

export const MealController = new Meal();

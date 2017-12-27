import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Quinoa',
    'healthy meals', 'https://c2.staticflickr.com/6/5092/5516645415_56680c19a7_b.jpg', [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Hamburguer',
      'Delicious from wendys',
      'http://www.publicdomainpictures.net/pictures/120000/velka/hamburger-open-top-bun.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Buns', 3)
      ])
  ];

  constructor(private shlService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shlService.addIngredients(ingredients);
  }

  getRecipe(idx: number) {
    return this.recipes[idx];
  }

}



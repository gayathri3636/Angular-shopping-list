import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import ShoppingListService from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export default class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Biryani',
      'Indian cuisine',
      'https://commons.wikimedia.org/wiki/File:Hyderabadi_Chicken_Biryani.jpg',
      [new Ingredient('meat', 5), new Ingredient('spices', 5)]
    ),
    new Recipe(
      'Taco',
      'Mexican cuisine',
      'https://commons.wikimedia.org/wiki/File:Hyderabadi_Chicken_Biryani.jpg',
      [new Ingredient('taco shell', 2)]
    ),
  ];
  constructor(private shoppinglistservice: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistservice.addIngredients(ingredients);
  }
}

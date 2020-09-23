import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Biryani',
      'Indian cuisine',
      'https://commons.wikimedia.org/wiki/File:Hyderabadi_Chicken_Biryani.jpg'
    ),
    new Recipe(
      'Biryani',
      'Indian cuisine',
      'https://commons.wikimedia.org/wiki/File:Hyderabadi_Chicken_Biryani.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}

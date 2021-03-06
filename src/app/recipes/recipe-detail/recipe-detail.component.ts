import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import RecipeService from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number
  constructor(private recipeservice: RecipeService,
    private router:Router,
    private route:ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id']
        this.recipe=this.recipeservice.getRecipe(this.id)
      }
    )
  }

  onAddToShoppingList() {
    this.recipeservice.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.route})
  }
}

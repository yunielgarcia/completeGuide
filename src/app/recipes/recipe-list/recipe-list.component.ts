import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a simple test', 'https://c2.staticflickr.com/6/5092/5516645415_56680c19a7_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

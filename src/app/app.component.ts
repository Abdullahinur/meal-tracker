import { Component } from '@angular/core';
import  { Meal } from './meal'


@Component({
  selector: 'meal-tracker',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public MealList : Meal [] = [
    { name: 'Chicken with rice', details:'Chicken in tomato sauce with rice', calories: 500},
    { name: 'Fish with pasta', details:'Fish in cream sauce with fussili', calories: 600},
    { name: 'Lamb with rice', details:'Grilled lamb with mint sauce and rice', calories: 800},
    { name: 'Hamburger', details:'Hamburger with fries',  calories: 1000},
  ];

  addMeal( newMealFromChild : Meal) {
      this.MealList.push( newMealFromChild );
  }


  showDetails( clickedMeal : Meal) {
      this.selectedMeal = clickedMeal;
  }

  selectedMeal : Meal = null;


  finishedEditing() {
      this.selectedMeal = null;
  }
}

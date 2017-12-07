import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';
import { AppComponent } from '../app.component';



@Component({
  selector: 'meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent {


  @Output() newMealSender = new EventEmitter();

  addClicked(name, details, calories) {
      var newMealToAdd : Meal = new Meal(name, details, calories);

      if( name === '' || details === '' || calories === '' ) {
          alert('Plesae fill in all the form fields');
      }  else {
          this.newMealSender.emit(newMealToAdd);
      }
  }
}

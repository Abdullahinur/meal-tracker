import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';
import { AppComponent } from '../app.component';


@Component({
  selector: 'meal-info',
  templateUrl: './meal-info.component.html',
  styleUrls: ['./meal-info.component.css']
})
export class MealInfoComponent {
    @Input() childMealList : Meal[];

    @Output() clickSender = new EventEmitter();

    nameHasBeenClicked( mealToEdit : Meal ) {
        this.clickSender.emit(mealToEdit);
    }

}

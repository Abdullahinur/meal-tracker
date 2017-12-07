import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';
import { AppComponent } from '../app.component';

@Component({
  selector: 'meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.css']
})
export class MealEditComponent {
  @Input() childSelectedMeal : Meal;

      @Output() doneClickedSender = new EventEmitter();

      doneClicked() {
          this.doneClickedSender.emit();
      }


}

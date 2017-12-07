import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealInfoComponent } from './meal-info/meal-info.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MealFormComponent,
    MealInfoComponent,
    MealEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from "@angular/core";
import { Model } from "./model";

@Component({
  selector: "todo-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    /* filter() is a lambda function 
    
    Alternative für:
    return this.model.items.filter(function (item) { return !item.done });
    */
    return this.model.items.filter(item => !item.done);
  }
}

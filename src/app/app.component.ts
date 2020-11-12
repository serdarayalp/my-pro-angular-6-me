import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";

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

  addItem(newItem) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
}

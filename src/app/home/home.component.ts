import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  todoText: string = '';               // Input value
  todoItems: { text: string }[] = [];  // Array of todos

  // Add a new todo
  addTodo() {
    if (this.todoText.trim()) {
      this.todoItems.push({ text: this.todoText });
      this.todoText = ''; // Clear input after adding
    }
  }

  // Delete a todo by index
  deleteTodo(index: number) {
    this.todoItems.splice(index, 1);
  }

  // Edit a todo
  editTodo(index: number) {
    const newText = prompt('Edit your task:', this.todoItems[index].text);
    if (newText !== null && newText.trim() !== '') {
      this.todoItems[index].text = newText.trim();
    }
  }

}

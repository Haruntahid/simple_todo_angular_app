import {Component, OnInit} from '@angular/core';
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
export class HomeComponent implements OnInit {



  todoText: string = '';               // Input value
  todoItems: { text: string }[] = [];  // Array of todos

  ngOnInit() {
    this.getData();
  }

  // Add a new todo
  addTodo() {
    if (this.todoText.trim()) {
      this.todoItems.push({ text: this.todoText });
      // @ts-ignore
      localStorage.setItem('todoArray', JSON.stringify(this.todoItems));
      this.todoText = ''; // Clear input after adding
    }
  }

  getData(){
    // @ts-ignore
    const data = localStorage.getItem('todoArray');
    if(data){
      this.todoItems = JSON.parse(data);
    }else {
      this.todoItems = [];
    }
  }



  // Delete a todo by index
  deleteTodo(index: number) {
    this.todoItems.splice(index, 1);
    // @ts-ignore
    localStorage.setItem('todoArray', JSON.stringify(this.todoItems))
  }

  // Edit a todo
  editTodo(index: number) {
    const newText = prompt('Edit your task:', this.todoItems[index].text);
    if (newText !== null && newText.trim() !== '') {
      this.todoItems[index].text = newText.trim();
      localStorage.setItem('todoArray', JSON.stringify(this.todoItems));
    }
  }

}

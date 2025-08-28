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
  todoItems: { text: string }[] = []; // Array of todos
  encodeString = "";





  ngOnInit() {
    this.getData();
  }

  getEncodedText(){
    const name = "tahid";
    let encodeText = "";
    encodeText = btoa(name);
    console.log(encodeText);
    console.log(atob(encodeText));
  }


  // @ts-ignore
  encode(arr : string) : string {
    return btoa(arr);
  }

  // @ts-ignore
  decode(arr : string) : string {
    // @ts-ignore
    return atob(arr);
  }



  // Add a new todo
  addTodo() {
    if (this.todoText.trim()) {
      this.todoItems.push({ text: this.todoText });

      localStorage.setItem('todoArray', this.encode(JSON.stringify(this.todoItems)));
      this.todoText = '';
    }
  }

  getData(){
    // @ts-ignore
    const data = localStorage.getItem('todoArray');

    if(data){
      let decodedJson = this.decode(data)
      let parseJson = JSON.parse(decodedJson);
      this.todoItems = Array.from(parseJson);
    }else {
      this.todoItems = [];
    }
  }



  // Delete a todo by index
  deleteTodo(index: number) {
    console.log(index);
    this.todoItems.splice(index, 1);

    localStorage.setItem('todoArray', this.encode(JSON.stringify(this.todoItems)));
  }

  // Edit a todo
  editTodo(index: number) {
    console.log(index);
    const newText = prompt('Edit your task:', this.todoItems[index].text);
    if (newText !== null && newText.trim() !== '') {
      this.todoItems[index].text = newText.trim();

      localStorage.setItem('todoArray', this.encode(JSON.stringify(this.todoItems)));
    }
  }

}

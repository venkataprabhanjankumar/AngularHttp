import { Component, OnInit } from '@angular/core';
import {CrudService} from "../sharedservice/crud.service";
import {CdkDragDrop,moveItemInArray,transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css']
})
export class DraganddropComponent implements OnInit {

  public users : any=[]
  userslist :any =[]

  constructor(public crudService : CrudService) { }

  ngOnInit(): void {
    this.crudService.getUsers().subscribe(response=>{
      console.log(response)
      this.users=response
    })
  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  handleDrop(event :CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
         moveItemInArray(event.container.data,
            event.previousIndex, event.currentIndex);
      } else {
         transferArrayItem(event.previousContainer.data,
         event.container.data,
         event.previousIndex,
         event.currentIndex);
      }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {CrudService} from "../sharedservice/crud.service";

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(public crudService : CrudService) { }

  userId = ''
  users :any = []

  handleSubmit(){
    console.log(this.userId)
    this.crudService.deleteUser(parseInt(this.userId)).subscribe(response=>{
      console.log(response)
      this.crudService.getUsers().subscribe(response=>{
        this.users=response
      })
    })
  }

  ngOnInit(): void {
  }

}

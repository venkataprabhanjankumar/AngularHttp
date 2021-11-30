import { Component, OnInit } from '@angular/core';
import {CrudService} from "../sharedservice/crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {

  users : any=[]
  id =''
  name=''
  email=''

  constructor(public crudService : CrudService,public route : Router) { }

  ngOnInit(): void {
    this.crudService.getUsers().subscribe(response=>{
        this.users=response
    })
  }

  submitUpdate(){
    this.crudService.updateUser(parseInt(this.id),{'name':this.name,'email':this.email}).subscribe(response=>{
      console.log(response)
      this.route.navigate(['/display']).then(()=>{
        console.log("redirected to 'display")
      })
    })
  }

}

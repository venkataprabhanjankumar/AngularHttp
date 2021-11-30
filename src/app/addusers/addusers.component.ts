import { Component, OnInit } from '@angular/core';
import {CrudService} from "../sharedservice/crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  name = ''
  email = ''
  users : any=[]

  constructor(public crudService : CrudService,public router : Router) { }

  ngOnInit(): void {
    this.crudService.getUsers().subscribe(response=>{
        this.users=response
    })
  }

  SubmitUser(){
    this.crudService.addUser({'name':this.name,'email':this.email}).subscribe(response=>{
      console.log(response)
      this.router.navigate(['/display']).then(()=>{
        console.log("redirected to /display")
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {CrudService} from "../sharedservice/crud.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-displayusers',
  templateUrl: './displayusers.component.html',
  styleUrls: ['./displayusers.component.css']
})
export class DisplayusersComponent implements OnInit {

  users : any =[]
  userSingle : any={}
  singleUser = false

  constructor(public crudService : CrudService,private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchUsers()
    if (this.actRoute.snapshot.params.id){
      this.singleUser=true
      this.fetchSingleUser(this.actRoute.snapshot.params.id)
    }
  }
  fetchUsers(){
    console.log(this.actRoute.snapshot.params.id)
    return this.crudService.getUsers().subscribe((response)=>{
      console.log(response)
      this.users=response
    })
  }

  fetchSingleUser(id:number){
    return this.crudService.getSingleUser(id).subscribe((response)=>{
      console.log(response)
      this.userSingle=response
    })
  }

}

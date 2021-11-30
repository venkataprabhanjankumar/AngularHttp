import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-virtualscrolling',
  templateUrl: './virtualscrolling.component.html',
  styleUrls: ['./virtualscrolling.component.css']
})
export class VirtualscrollingComponent implements OnInit {

  resource = "https://jsonplaceholder.typicode.com/photos"
  data : any=[]

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.resource)
      .subscribe(response=>{
        this.data=response
      })
  }

}

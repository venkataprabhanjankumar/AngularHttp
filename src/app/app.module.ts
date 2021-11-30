import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {DragDropModule} from "@angular/cdk/drag-drop";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddusersComponent } from './addusers/addusers.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
import {CrudService} from "./sharedservice/crud.service";
import { DisplayusersComponent } from './displayusers/displayusers.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import {FormsModule} from "@angular/forms";
import { VirtualscrollingComponent } from './virtualscrolling/virtualscrolling.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';

@NgModule({
  declarations: [
    AppComponent,
    AddusersComponent,
    UpdateusersComponent,
    DisplayusersComponent,
    DeleteuserComponent,
    VirtualscrollingComponent,
    DraganddropComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ScrollingModule,
        DragDropModule
    ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

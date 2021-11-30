import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddusersComponent} from "./addusers/addusers.component";
import {UpdateusersComponent} from "./updateusers/updateusers.component";
import {DisplayusersComponent} from "./displayusers/displayusers.component";
import {DeleteuserComponent} from "./deleteuser/deleteuser.component";
import {VirtualscrollingComponent} from "./virtualscrolling/virtualscrolling.component";
import {DraganddropComponent} from "./draganddrop/draganddrop.component";

const routes: Routes = [
  {path:"add",component:AddusersComponent},
  {path:"update",component:UpdateusersComponent},
  {path:"display",component:DisplayusersComponent},
  {path:"display/:id",component:DisplayusersComponent},
  {path:"delete",component:DeleteuserComponent},
  {path:"virtualscroll",component:VirtualscrollingComponent},
  {path:"dragdrop",component : DraganddropComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

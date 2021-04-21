import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteClassComponent } from './delete-class/delete-class.component';
import { ShowClassComponent } from './show-class/show-class.component';
import { StoreClassComponent } from './store-class/store-class.component';
import { UpdateClassComponent } from './update-class/update-class.component';

const routes: Routes = [
  {path: "delete",component:DeleteClassComponent},
  {path: "show",component:ShowClassComponent},
  {path: "add",component:StoreClassComponent},
  {path: "update",component:UpdateClassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

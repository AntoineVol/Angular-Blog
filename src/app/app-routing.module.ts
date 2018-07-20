import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { ViewListComponent} from './view-list/view-list.component'
import { ViewEditComponent} from './view-edit/view-edit.component'


const ROUTES : Routes = [
  {path:'', redirectTo:'articles', pathMatch:'full'},
  {path:'articles', component : ViewListComponent},
  {path:'edit', component : ViewEditComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports:[ RouterModule ]

})
export class AppRoutingModule { }

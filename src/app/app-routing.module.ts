import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './user/list-tasks/list-task.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditTaskComponent } from './user/edit-user/edit-user.component';
import { AddTaskComponent } from './user/addrayon/addrayon.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path:'tasks',
    component:ListTaskComponent
  },
  {
    path:'addT',
    component:AddTaskComponent
  },
  {
    path:'editask/:id',
    component:EditTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

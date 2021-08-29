import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './user/list-tasks/list-task.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditTaskComponent } from './user/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './user/addrayon/addrayon.component';
import { SearchPipe } from './search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';






@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    EditTaskComponent,
    AddTaskComponent,
    SearchPipe
  ],
  imports: [
    HttpClientModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

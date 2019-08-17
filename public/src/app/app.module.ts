import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { UserService } from "./user/user.service";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';


import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { NavComponent } from './default/nav/nav.component';
import { HeaderComponent } from './default/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserListComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,
    HttpErrorHandler,
    MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

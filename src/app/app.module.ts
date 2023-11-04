import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './Component/userpage/userpage.component';
import { AdminpageComponent } from './Component/adminpage/adminpage.component';
import { LoginpageComponent } from './Component/loginpage/loginpage.component';
import { RegisterpageComponent } from './Component/registerpage/registerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    AdminpageComponent,
    LoginpageComponent,
    RegisterpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

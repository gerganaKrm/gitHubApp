import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReposComponent } from './repos/repos.component';
import { ReposDetailsComponent } from './reposDetails/repos-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReposComponent,
    ReposDetailsComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'repos', component: ReposComponent},
      {path: 'login', component: LoginComponent},
      {path: 'repos/:name', component: ReposDetailsComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ], {useHash: true}),
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

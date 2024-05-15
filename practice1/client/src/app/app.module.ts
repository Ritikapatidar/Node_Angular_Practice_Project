import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './dashboard/components/Subject/get/listing.component';
import { ToastrModule } from 'ngx-toastr';
import { DashboardMainComponent } from './dashboard/components/dashboard-main/dashboard-main.component';
import { SubjectFormComponent } from './dashboard/components/Subject/subject-form/subject-form.component';
import { GetComponent } from './dashboard/components/Book/get/get.component';
import { BookFormComponent } from './dashboard/components/Book/book-form/book-form.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
// import {MatSelectModule} from '@angular/material/select'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    ListingComponent,
    DashboardMainComponent,
    SubjectFormComponent,
    GetComponent,
    BookFormComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    provideAnimations(), provideToastr()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

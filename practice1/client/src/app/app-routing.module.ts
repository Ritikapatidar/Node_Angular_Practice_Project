import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from 'src/middleware/auth.guard';
import { ListingComponent } from './dashboard/components/Subject/get/listing.component';
import { DashboardMainComponent } from './dashboard/components/dashboard-main/dashboard-main.component';
import { SubjectFormComponent } from './dashboard/components/Subject/subject-form/subject-form.component';
import { GetComponent } from './dashboard/components/Book/get/get.component';
import { BookFormComponent } from './dashboard/components/Book/book-form/book-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  {
    path:'',
     component:HomeComponent
  },
  {
    path:'login',
    component: LoginComponent,
    // canActivate: [authGuard]
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children:[
      {
        path: '',
        component: DashboardMainComponent
      },
      {
        path: 'getSubjects',
        component:ListingComponent
      },
      {
        path: 'addSubject',
        component:SubjectFormComponent
      },
      {
        path: 'updateSubject/:id',
        // data: {some_data: 'some value'},    // Pass additional data
        component:SubjectFormComponent,
        title:'Update subject'
      },
      {
        path: 'getBooks',
        component:GetComponent
      },
      {
        path: 'addBook',
        component:BookFormComponent
      },
      {
        path: 'updateBook/:id',
        // data: {some_data: 'some value'},    // Pass additional data
        component:BookFormComponent,
        title:'Update book'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from './_alert';
import { ErrorModule } from './errorHandler/error.module';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { LoginService } from '../app/shared/login.service';
import { LoginComponent } from './login/login.component';

import { UserService } from '../app/shared/user.service';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserEditComponent } from './users/user-details/user-edit/user-edit.component';
import { UserNewComponent } from './users/user-new/user-new.component';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectEditComponent } from './projects/project-details/project-edit/project-edit.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskNewComponent } from './tasks/task-new/task-new.component';
import { TaskEditComponent } from './tasks/task-details/task-edit/task-edit.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';

//#TODO add guards to navigate incase no user loggedin into login page
const appRoutes: Routes = [
  { path: '', redirectTo: 'timesheet', pathMatch: 'full' },
  {
    path: 'userinfo', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: ':id', component: UserDetailsComponent },
      { path: ':id/edit', component: UserEditComponent }
    ]
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuard], children: [
      { path: 'new', component: UserNewComponent },
      { path: ':id', component: UserDetailsComponent },
      { path: ':id/edit', component: UserEditComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard], children: [
      { path: 'new', component: ProjectNewComponent },
      { path: ':id', component: ProjectDetailsComponent },
      { path: ':id/edit', component: ProjectEditComponent },
    ]
  },
  {
    path: 'tasks', component: TasksComponent, canActivate: [AuthGuard], children: [
      { path: 'new', component: TaskNewComponent },
      { path: ':id', component: TaskDetailsComponent },
      { path: ':id/edit', component: TaskEditComponent },
    ]
  },
  {
    path: 'timesheet', component: TimesheetsComponent, canActivate: [AuthGuard]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UsersComponent,
    UserDetailsComponent,
    UserEditComponent,
    HomeComponent,
    UserNewComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectEditComponent,
    ProjectNewComponent,
    TasksComponent,
    TaskDetailsComponent,
    TaskNewComponent,
    TaskEditComponent,
    TimesheetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlertModule,
    ErrorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }

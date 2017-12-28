import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    RouterModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'students',component:DashboardComponent},
      //{path:'',redirectTo:'welcome',pathMatch:'full'}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

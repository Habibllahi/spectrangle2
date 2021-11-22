import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinNewtworkComponent } from './join-network/join-newtwork.component';
import { OurCultureComponent } from './our-culture/our-culture.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'work-with-us',
    component: WorkWithUsComponent
  },
  {
    path: 'our-culture',
    component: OurCultureComponent
  },
  {
    path: 'join-network',
    component: JoinNewtworkComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

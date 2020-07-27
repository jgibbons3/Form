import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';


const routes: Routes = [
  { path: '', redirectTo: '/page_one', pathMatch: 'full' },
  { path: 'page_one', component: PageOneComponent },
  { path: 'page_two', component: PageTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



  




import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplatedFormsComponent } from './templated-forms/templated-forms.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'templated-forms', component: TemplatedFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

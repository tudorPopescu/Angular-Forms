import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import FormsModule, ReactiveFormsModule (for reactive forms)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplatedFormsComponent } from './templated-forms/templated-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplatedFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

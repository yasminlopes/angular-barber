import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeRota } from './app.routing';
import { NotFoundComponent } from './layout/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(HomeRota)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

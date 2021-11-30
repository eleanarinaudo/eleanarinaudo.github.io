import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    NotfoundComponent
  ]
})
export class PagesModule { }

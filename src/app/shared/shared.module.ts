import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [NavComponent, FooterComponent]
})
export class SharedModule { }

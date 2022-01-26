import { Component, OnInit } from '@angular/core';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'angularTests';
  list = ['Futura Licenciada en Ciencias de la Computación.', 'Futura Tecnica Superior en Ciencias de Datos e Inteligencia Artificial.']
  cursor =  true;
  pauseFor = 3000;
  delay= 75;

  constructor() { }

  ngOnInit(): void {
  }

}

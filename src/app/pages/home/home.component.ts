import { Component, OnInit } from '@angular/core';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'angularTests';
  list = ['Jr Data Engineer ...', 'Data Science and AI Student ...']
  cursor =  true;
  pauseFor = 3000;
  delay= 75;

  constructor() { }

  ngOnInit(): void {
  }

}

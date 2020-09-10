import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Alka';
  today:number  = Date.now();

  constructor(){
    this.changeName('Alka');
    console.log(123);
  }

  changeName(name:string):void{
    this.name = name;
  }
}

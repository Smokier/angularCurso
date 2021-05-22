import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  Nombre: any;
  ngOnInit() {}

  addtext() {
    alert('hola' + ' ' + this.Nombre);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss'],
})
export class RelojComponent implements OnInit {
  today = Date.now();
  fixedTimezone = this.today;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isAlignEnd: boolean = false;
  isDisabled: boolean = false;
  isRequired: boolean = false;
  // favoriteSeason: string = 'Autumn';
  favoriteSeason: string = 'Winter';
  seasonOptions = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  mudou(evento) {
    console.log(evento);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: '<p> Segundo componente </p>',
  styles: [ 'background-color: antiquewhite']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

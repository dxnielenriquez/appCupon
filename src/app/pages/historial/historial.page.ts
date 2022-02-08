import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  historial = [
    {
      cupon: 'Desayuno gratis',
      tienda: 'Vips',
      fecha: '15-05-2021'
    },
    {
      cupon: 'Desayuno gratis',
      tienda: 'Vips',
      fecha: '15-05-2021'
    },
    {
      cupon: 'Desayuno gratis',
      tienda: 'Vips',
      fecha: '15-05-2021'
    },
  ]

}

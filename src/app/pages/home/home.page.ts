import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valueSelected: string = "inicio";

  segmentChanged(event: CustomEvent) {
    this.valueSelected = event.detail.value;

  }




  tiendas = [
    {
      src: 'assets/img/Walmart-logo.png',
      titulo: 'Una tienda'
    },
    {
      src: 'assets/img/soriana.jpg',
      titulo: 'Una tienda'
    },
    {
      src: 'assets/img/liverpool.jpg',
      titulo: 'Una tienda'
    },
    {
      src: 'assets/img/palacio.png',
      titulo: 'Una tienda'
    },
    {
      src: 'assets/img/suburbia.jpg',
    },
    {
      src: 'assets/img/sams.jpg',
      titulo: 'Una tienda'
    },
    {
      src: 'assets/img/liverpool.jpg',
      titulo: 'Una tienda'
    },
    {
      src: 'assets/img/palacio.png',
      titulo: 'Una tienda'
    }
  ]

  cupones = [
    {
      imagen: 'assets/img/comida1.jpg',
      promocion: 'Descuento en hamburguesas',
      fecha: '15 de May hasta 20 de May'
    },
    {
      imagen: 'assets/img/comida2.jpg',
      promocion: 'Descuento en pizzas',
      fecha: '10 de May hasta 20 de Jun'
    },
    {
      imagen: 'assets/img/comida3.jpg',
      promocion: 'Descuento en helados',
      fecha: '20 de May hasta 20 de Sep'
    },
    {
      imagen: 'assets/img/comida1.jpg',
      promocion: 'Descuento en hamburguesas',
      fecha: '15 de May hasta 20 de May'
    },
    {
      imagen: 'assets/img/comida2.jpg',
      promocion: 'Descuento en pizzas',
      fecha: '10 de May hasta 20 de Jun'
    },
    {
      imagen: 'assets/img/comida3.jpg',
      promocion: 'Descuento en helados',
      fecha: '20 de May hasta 20 de Sep'
    }
  ];

  promociones = [
    {
      imagen: 'assets/img/promo1.jpg',
      promocion: 'Descuento en helados',
      fecha: '15 de May hasta 20 de May'
    },
    {
      imagen: 'assets/img/promo2.jpg',
      promocion: 'Descuento en hot cakes',
      fecha: '10 de May hasta 20 de Jun'
    },
    {
      imagen: 'assets/img/promo3.jpg',
      promocion: '2x1 en licuados',
      fecha: '20 de May hasta 20 de Sep'
    }
  ];

}

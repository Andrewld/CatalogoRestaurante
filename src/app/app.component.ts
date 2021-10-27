import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/cardapio/caseirinho', icon: 'home' },
    { title: 'Lanches', url: '/cardapio/lanches', icon: 'fast-food' },
    { title: 'Pratos', url: '/cardapio/pratos', icon: 'fish' },
    { title: 'Sobremesas', url: '/cardapio/sobremesas', icon: 'ice-cream' },
    { title: 'Bebidas', url: '/cardapio/bebidas', icon: 'beer' }
  ];
  constructor() {}
}

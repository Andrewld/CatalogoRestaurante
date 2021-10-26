import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: 'inicio', icon: 'home' },
    { title: 'Lanches', url: 'lanches', icon: 'fast-food' },
    { title: 'Pratos', url: 'pratos', icon: 'fish' },
    { title: 'Sobremesas', url: 'sobremesas', icon: 'ice-cream' },
    { title: 'Bebidas', url: 'bebidas', icon: 'beer' }
  ];
  constructor() {}
}

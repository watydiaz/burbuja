import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/pages/inicio', icon: 'home' },
    { title: 'Inventario', url: '/folder/Inventario', icon: 'apps' },
    { title: 'Productos', url: '/folder/Productos', icon: 'cart' },
    { title: 'Clientes', url: '/folder/Clientes', icon: 'people' },
    { title: 'Pedidos', url: '/folder/Pedidos', icon: 'bus' },
    { title: 'Cartera', url: '/folder/Cartera', icon: 'wallet' },
    { title: 'Contabilidad', url: '/folder/Contabilidad', icon: 'analytics' },
  ];
  public labels = ['ejemplo1', 'ejemplo2', 'ejemplo3'];
  constructor() {}
}

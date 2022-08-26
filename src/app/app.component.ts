import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Productos', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Clientes', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Pedidos', url: '/folder/Archived', icon: 'archive' },
    { title: 'Cartera', url: '/folder/Trash', icon: 'trash' },
    { title: 'Contabilidad', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['ejemplo1', 'ejemplo2', 'ejemplo3'];
  constructor() {}
}

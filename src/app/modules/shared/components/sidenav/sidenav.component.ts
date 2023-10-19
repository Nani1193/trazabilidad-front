import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  mobileQuery: MediaQueryList;
  username: any;

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Cliente", route: "cliente", icon: "group"},
    {name: "Pedido", route: "pedido", icon: "person_add"},
    {name: "Líneas de pedidos", route: "lineas pedidos", icon: "work_history"},
    {name: "Entregas", route: "entregas", icon: "poll"},
    {name: "Productos", route: "productos", icon: "directions_car"},
  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  shouldRun = true;

  ngOnInit(): void {
  }

  logout(){
  }

}

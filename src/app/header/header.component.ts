import { Component } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { routes, RouteWrapper, wrappedRoutes } from '../app.routes';


interface HeaderItem {
  path: string,
  name: string,
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  routes: RouteWrapper[] = wrappedRoutes.filter((route: RouteWrapper) => route.name);

}

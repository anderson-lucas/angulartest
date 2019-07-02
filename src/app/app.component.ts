import { Component, ViewChild, OnInit } from '@angular/core';
import { TitleService } from './core/services/title.service';
import { Router, NavigationStart } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("sidenav", { static: false }) private sidenav: any;

  private appName: string = "MyApp"
  private menus: Array<any> = [
    { nome: "Home", icone: "home", link: "/home" },
    { nome: "Clientes", icone: "people", link: "/clientes" },
    { nome: "Imóveis", icone: "location_city", link: "/imoveis" },
    { nome: "Contratos", icone: "file_copy", link: "/contratos" },
    { nome: "Configurações", icone: "settings", link: "/configuracoes" },
  ];
  private opened: boolean = false;
  private isLogin: boolean = false;
  private userLogged: any = {};

  constructor(private titleService: TitleService,
              private router: Router,
              private authService: AuthService) {
    router.events.pipe(
      filter((event: any) => event instanceof NavigationStart)
    ).subscribe(event => {
      this.isLogin = event.url === "/login" ? true : false;

      const userLogged = localStorage.getItem("loggedUser");
      if (!userLogged && !this.isLogin) this.logout();
    });
  }

  ngOnInit(): void {
    this.titleService.init();
  }

  closeSidenav(): void {
    setTimeout(() => {
      this.sidenav.close();
    }, 200);
  }

  logout(): void {
    this.authService.logout();
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() private callback = new EventEmitter();

  private menus: Array<any> = [
    {nome: "Home", icone: "home", link: "home"},
    {nome: "Clientes", icone: "home", link: "home"},
    {nome: "Imóveis", icone: "home", link: "home"},
    {nome: "Contratos", icone: "home", link: "home"},
    {nome: "Configurações", icone: "home", link: "home"},
  ];
  
  constructor() { }

  ngOnInit() {
  }
  
  toggleSidenav() {
    this.callback.emit('teste')
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, data: {title: "Login"} },
  { path: "home", component: HomeComponent, data: {title: "Home"} },
  { path: "clientes", component: ClientesComponent, data: {title: "Clientes"} },
  { path: "imoveis", component: ImoveisComponent, data: {title: "Imóveis"} },
  { path: "contratos", component: ContratosComponent, data: {title: "Contratos"} },
  { path: "configuracoes", component: ConfiguracoesComponent, data: {title: "Configurações"} },
  { path: "**", redirectTo: "/home", pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  HomeComponent,
  ClientesComponent,
  ImoveisComponent,
  ContratosComponent,
  ConfiguracoesComponent,
];
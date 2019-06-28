import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() private callback = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  toggleSidenav() {
    this.callback.emit('teste')
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() private callback = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  toggleSidenav() {
    this.callback.emit('teste')
  }
}

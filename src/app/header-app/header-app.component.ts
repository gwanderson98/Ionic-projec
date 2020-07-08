import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss'],
})
export class HeaderAppComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
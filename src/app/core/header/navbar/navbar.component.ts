import { Component, OnInit } from '@angular/core';
import { PathService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor(public path: PathService) {}

  ngOnInit(): void {}
}

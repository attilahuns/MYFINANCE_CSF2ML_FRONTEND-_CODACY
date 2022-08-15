import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'f2ml-account-footer-menu',
  templateUrl: './account-footer-menu.component.html',
  styleUrls: ['./account-footer-menu.component.scss']
})
export class AccountFooterMenuComponent implements OnInit {

  @Input() label!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  isSignIn() {
    return this.router.url.startsWith('/signin');
  }

}

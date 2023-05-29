import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {

  }
  onLogin(){
    this._router.navigate(['/dashboard'])

  }

}

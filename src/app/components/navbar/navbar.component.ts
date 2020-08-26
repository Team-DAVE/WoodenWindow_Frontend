import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean{
    if(JSON.parse(localStorage.getItem('userInfo')) != null){

      return false;
    }
    else{
      return true;
    }
  }

  logout():void{

    localStorage.setItem('userInfo', null);

  }
}

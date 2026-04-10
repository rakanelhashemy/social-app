import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from "@angular/router";
@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
ngOnInit(): void {
  initFlowbite();
}
  logout(){
    localStorage.removeItem("Token")
   localStorage.removeItem("userInfo")
  }
}


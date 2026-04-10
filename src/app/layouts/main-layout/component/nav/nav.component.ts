import { Component, OnInit, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
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
    private readonly router=  inject(Router);
  logout(){
    localStorage.removeItem("Token")
   localStorage.removeItem("userInfo")
  this.router.navigate(["/login"])
  }
}


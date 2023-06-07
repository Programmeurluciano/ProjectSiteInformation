import { Component, HostListener, OnInit } from '@angular/core';
@HostListener('window:scroll',['$event'])

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onWIndowScroll(){
    let element=document.querySelector('.navbar') as HTMLElement;
    if(window.pageXOffset > element.clientHeight){
      element.classList.add('navbar-inverse');

    }else {
      element.classList.remove('navbar-inverse')
    }
  }
}

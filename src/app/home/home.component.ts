import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: any[];
  myInterval: Number;

  constructor() {
    this.myInterval = 4000;
    this.slides = [
      { image: "./assets/images/home1.jpg", text: "在线图书馆，您身边的图书馆" },
      { image: "./assets/images/home2.jpg", text: "要么旅行，要么读书，身体和灵魂总有一个在路上" },
      { image: "./assets/images/home3.jpg", text: "多读书" },
      { image: "./assets/images/home4.jpg", text: "读好书" },
    ];
  }

  ngOnInit() {
  }

}

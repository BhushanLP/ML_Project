import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-data',
  templateUrl: './train-data.component.html',
  styleUrls: ['./train-data.component.css']
})
export class TrainDataComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

  }

}

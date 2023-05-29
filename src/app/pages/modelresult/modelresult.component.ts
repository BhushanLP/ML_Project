import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelresult',
  templateUrl: './modelresult.component.html',
  styleUrls: ['./modelresult.component.css']
})
export class ModelresultComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // myForm: FormGroup;
  constructor(private elementRef: ElementRef) {

    // this.myForm = new FormGroup({
    //   items: new FormArray([]),
    // });
 
   }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }


   
  // get items(): FormArray {
  //   return this.myForm.get('items') as FormArray;
  // }
  // addItem(): void {
  //   this.items.push(new FormControl('', Validators.required));
  // }

  // removeItem(index: number): void {
  //   this.items.removeAt(index);
  // }

  // submitForm(): void {
  //   if (this.myForm.valid) {
  //     console.log(this.myForm.value);
  //     // Perform further actions with the form data
  //   }
  // }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent  {
  selectedDate: any;
  name = 'Angular 6';

  onSelect(event: any){
    console.log(event);
    this.selectedDate= event;
  }
}

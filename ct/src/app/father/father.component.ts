import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor() {
    console.log('father constructor');
   }

  ngOnInit() {
    console.log('father on init');
  }

  ngOnChanges() {
    console.log('father on changes');
  }

  ngDoCheck() {
    console.log('father do check');
  }

  ngAfterContentInit() {
    console.log('father after content init');
  }

  ngAfterContentChecked() {
    console.log('father after content checked');
  }

  ngAfterViewInit() {
    console.log('father after view init');
  }

  ngAfterViewChecked() {
    console.log('father after view checked');
  }

  ngOnDestroy() {
    console.log('father on destroy');
  }

}

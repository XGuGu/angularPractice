import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {



  constructor() {
    console.log('son constructor');
    this.num = 1;
   }

   inc() {
     console.log('!!!!!!!!!!!!!!!!!!!!!!')
     this.num += 1;
   }

  ngOnInit() {
    console.log('son on init');
  }

  ngOnChanges() {
    console.log('son on changes');
  }

  ngDoCheck() {
    console.log('son do check');

  }

  ngAfterContentInit() {
    console.log('son after content init');
  }

  ngAfterContentChecked() {
    console.log('son after content checked');
  }

  ngAfterViewInit() {
    console.log('son after view init');
  }

  ngAfterViewChecked() {
    console.log('son after view checked');
  }

  ngOnDestroy() {
    console.log('son on destroy');
  }
}

Component Interaction

 @Input @Output

 app.component.ts => test.component.ts   // parent to child


in parent:

template:`
  <app-test [parentData]="name"> </app-test>
`

class parentComponent {
  public name = "vashwas";
}


in test:

template: `
  <h2> {{parentData}} </h2>

`

class testComponent {
  @InputO() public parentData;

  //Input('parentData') public name
}

app.component.ts <= test.component.ts     //child to parent

in child:
import {EventEmitter, Output, Input } from '@angular/core'


template:`
  <button (click)="fireEvent()"> Send Event</button>
`

class testComponent {
  @Output public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('hey');
  }
}

in parent:

template:`
  <h1> {{message}} </h1>
  <app-test (childEvent)="message=$event"> </app-test>
`

class parentComponent {
  public message = "";
}

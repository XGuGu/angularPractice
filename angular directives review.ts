Structural Directives

add or remove HTML elements from the DOM

ngIf
ngSwitch
ngFor

template: `
  <h2 *ngIf="displayName; else elseBlock">  Code evalution </h2>

  <ng-template #elseBlock>
    <h2 *ngIf="displayName">  Name is hidden </h2>
  </ng-template>


  <div *ngIf="displayName"; then thenBlock; else elseBlock"> </div>

  <ng-template #thenBlock>
    <h2> Code </h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2> Hidden </h2>
  </ng-template>
`
// if is "false", the display disappear

displayName = true;
// toggle


template: `
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'"> You picked red color </div>
    <div *ngSwitchCase="'blue'"> You picked blue color </div>
    <div *ngSwitchCase="'green'"> You picked green color </div>
    <div *ngSwitchDefault> default value</div>

  </div>
`

publick color = "red";

template: `
  <div *ngFor="let color of colors; index as i ">
    <h2> {{i}} {{color}} </h2>
  </div>
`

public colors = ["red", "blue", "green", "yellow"];

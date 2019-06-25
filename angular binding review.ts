
Property Binding

Attribute vs Property
1. Attribute and Properties are not the same.
2. Attributes - HTML
3. Properties - DOM (Document Object Model)
4. Attributes initialize DOM properties and then they are done.
   Attribute values cannot change once they are initialized.
5. Property values however can change

example:

@Component({
  selector: 'app-test',
  template"`
    <input [id]="myId" >
    <input id="{{myId}}" > //also fine ,however, interpolation can only work with String values
    <input [disabled]="isDisabled" >
    <input bind-disabled="isDisabled" >
  `,
  styles:[]
})

export class TestComponent implements OnInit {
  public myId = "testId";
  public isDisabled = false;

  ngOnInit() {}
}

Binding Classes

// class binding is useful allows you to dynamiclly add or remove classes
// based on your application states

template: `
  <h2 [class]="myClass" >
  <h2 [class.text-danger]="hasError" >

  <h2 [ngClass]="messageClasses" >
`
styles:[
  .text-danger {
    color:red;
  }
  .text-success {
    color: green;
  }
  .text-special {
    font:italic;
  }
]

public hasError = true;
public isSpecial = true;
public messageClasses = {
  "text-sucess": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial
}


Style Binding

template: `
  <h2 [style.color]="'orange'" >
  <h2 [style.color]="hasError ? 'red' : 'green'"
  <h2 [style.color]="highlightColor" >

  <h2 [ngStyle]="titleStyles" >
`

public hasError = true;
public highlightColor = "orange";
public titleStyles = {
  color: "blue",
  fontStyle: "italic"
}

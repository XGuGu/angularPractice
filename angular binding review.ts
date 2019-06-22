
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
  `,
  styles:[]
})

export class TestComponent implements OnInit {
  public myId = "testId";

  ngOnInit() {}
}

Pipes

// to transform data before display in view

//does not change value or porperty of the object

built-in pipes:


template:`
  <h2> {{ name }}</h2>
  <h2>{{ name | lowercase }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h2>{{ message | titlecase }}</h2>
  <h2>{{ name | slice:3 }}</h2>  => evolution
  <h2>{{ name | slice:3:5 }}</h2>  => ev
  <h2>{{ person | json }}</h2>  => {"firstName": "John", "lastName": "Doe"}

  <h2>{{ 5.678 | number:'1.2-3' }}</h2>  =>  5.678
  <h2>{{ 5.678 | number:'3.4-5' }}</h2>  =>  005.6780
  <h2>{{ 5.678 | number:'3.1-2' }}</h2>  =>  005.68

  <h2>{{ 0.25 | percent }}</h2>  =>  25%

  <h2>{{ 0.25 | currency }}</h2>  =>  $0.25
  <h2>{{ 0.25 | currency: 'GBP' }}</h2>  => f0.25
  <h2>{{ 0.25 | currency: 'GBP': 'code' }}</h2>  => GBP0.25

  <h2>{{ date | date:'short' }}</h2>  => 12/3/17/, 9:50 PM
  <h2>{{ date | date:'shortDate' }}</h2>  => 12/3/17
  <h2>{{ date | date:'shortTime' }}</h2>  => 9:50 PM

`

class TestComponent implements OnInit {
  public name = "Codevolution";
  public message = "Welcome to Codevolution";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();

}

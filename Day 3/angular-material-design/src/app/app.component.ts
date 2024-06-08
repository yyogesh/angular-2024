import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-design';
  version = '1.0';
  dataQa = "submit-button"
  birthdate = new Date(1996, 5, 5);

  a = 0.259;
  b = 1.349;

  employerName = '';

  collection = ['a', 'b', 'c', 'd'];

  object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  course: {[key: string]: string} = {skill1: 'angular', skill2: 'react', skill3: 'vuejs'}

  result!: number;

  client={one:['one','one one'],two:['two','two 2','two 3']}

  constructor() {
    if(this.title === 'angular-material-design') {
      this.employerName = 'ABC'
    }
  }
}

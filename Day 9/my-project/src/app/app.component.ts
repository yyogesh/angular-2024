import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stdCodeValidator } from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-project';

  userForm!: FormGroup;
  countries = ["US", "UK", "INDIA"]
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.userForm = this.buildUserForm();
  }
  // userForm = new FormGroup({
  //   firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   lastName: new FormControl('', Validators.required),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });

  private buildUserForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), stdCodeValidator('91'), Validators.pattern('^[a-zA-Z ]*$')]],
      country: ['INDIA', Validators.required],
      comment: ['']
    });
  }

  public onInputChange(event: any) {
    console.log('event', event)
    // if (event.keyCode !== 97) {
    //   return false;
    // }
    return true;
  }
}

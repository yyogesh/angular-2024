import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkUserValidation, compareValidator, stdCodeValidator } from './validator';
import { UserService } from './user.service';
import { debounceTime, distinctUntilChanged, switchMap, tap, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-project';
  isLoading = false;

  constrolMinLength = 8

  userForm!: FormGroup;
  countries = ["US", "UK", "INDIA"]
  constructor(private formBuilder: FormBuilder, private readonly userService: UserService) {

  }

  ngOnInit(): void {
    this.userForm = this.buildUserForm();

    this.userForm.get('search')?.valueChanges.pipe(
      debounceTime(200), // wait for 500ms pasuse event
      tap((value) => this.isLoading = true),
      distinctUntilChanged(),
      switchMap(value => this.userService.searchUsers(value)), // 5sec
     // tap((value) => this.isLoading = false),
      // switchMap(value => {
      //   return this.userService.searchUsers(value);
      // }),
      // map(users => {
      //   console.log(users);
      //   return users;
      // })
    ).subscribe(result => {
      console.log(result);
      this.isLoading = false
      // this.userService.searchUsers(result).subscribe(users => {
      //   console.log(users);
      //   this.isLoading = false
      // });
      
    });

    // this.userForm.get('country')?.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    // this.userForm.get('comment')?.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    // this.userForm.get('passwordGroup.password')?.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    // this.userForm.get('passwordGroup.confirmPassword')?.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    // this.userForm.get('abc')?.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
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
      name: ['', [
        Validators.required, 
        Validators.minLength(3), 
      //  stdCodeValidator('91'), 
        Validators.pattern('^[a-zA-Z ]*$'),
      ], [checkUserValidation(this.userService)]],
      country: ['INDIA', Validators.required],
      comment: [''],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(this.constrolMinLength)]],
        confirmPassword: ['', [Validators.required]]
      }, {
        validator: compareValidator('password', 'confirmPassword')
      }),
      // password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', [Validators.required]]
      abc: ['', {
        validators: [Validators.required],
        asyncValidators: [checkUserValidation(this.userService)],
        updateOn: 'blur'
      }],
      search: ['']
    });
  }

  public onInputChange(event: any) {
    console.log('event', event)
    // if (event.keyCode !== 97) {
    //   return false;
    // }
    return true;
  }

  public userFormHasError(prop: string, errorName: string): boolean {
    return this.userForm.get(prop)?.hasError(errorName) ?? false;
  }


}

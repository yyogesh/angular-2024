import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup, Validators, ValueChangeEvent } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dyanmic-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './dyanmic-form.component.html',
  styleUrl: './dyanmic-form.component.scss'
})
export class DyanmicFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      items: this.fb.array([
        this.fb.group({
          itemName: ['test', Validators.required],
          quantity: ['1', [Validators.required, Validators.min(1)]]
        }),
      ])
    });

    this.myForm.get('name1')?.valueChanges.subscribe(data => {
      console.log("asdf")
    })

    this.myForm.get('name')?.events.subscribe(event => {
      console.log("event", event)
    })


    this.myForm?.events.subscribe(event => {
      console.log("event", event)
    })
    // this.myForm.get('name')?.events.pipe(
    //   filter(event => event instanceof ValueChangeEvent)
    // ).subscribe(event => {
    //   console.log("event", event)
    // })
  }

  get nameValue(): string {
    return this.myForm.get('name')?.value
  }

  get items() {
    return this.myForm.get('items') as UntypedFormArray
  }

  onSubmit(){
    // this.myForm.addControl('name1', new FormControl())
    this.myForm.get('name1')?.setValidators(Validators.required)
    this.myForm.get('name1')?.updateValueAndValidity();

    this.myForm.get('name1')?.clearValidators();

    this.myForm.get('name')?.markAsDirty();

    this.myForm.reset();
  }



  addItem() {
    const newItem = this.fb.group({
      itemName: ['1', Validators.required],
      quantity: ['3', [Validators.required, Validators.min(1)]]
    })

    this.items.push(newItem);
  }

  removeItem(index: number) {
    this.items.removeAt(index)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';
import { FormService } from './form.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  studentRegForm = new FormGroup({
    name: new FormGroup({
      first: new FormControl(),
      middle: new FormControl(),
      last: new FormControl()
    }),
    std: new FormControl(),
    address: new FormGroup({
      country: new FormControl(),
      state: new FormControl(),
      city: new FormControl()
    }),
    skills: new FormArray([])
  });

  constructor(private formService: FormService) {
    const form1 = this.formService.createForm([
      'country',
      'continent',
      'planet'
    ]);
    console.log('Form1', form1);
    const form2 = this.formService.createForm(['name', 'gender', 'std']);
    console.log('Form2', form2);
  }
  addSkillFormControl() {
    console.log(this.studentRegForm);
    const skillFormControlOdd = new FormControl('Writing', [
      Validators.minLength(5)
    ]);
    const skillFormControlEven = new FormControl('Writing', [
      Validators.minLength(3)
    ]);
    if (
      (this.studentRegForm.controls.skills as FormArray).controls.length % 2 ==
      0
    ) {
      (this.studentRegForm.controls.skills as FormArray).push(
        skillFormControlEven
      );
    } else {
      (this.studentRegForm.controls.skills as FormArray).push(
        skillFormControlOdd
      );
    }
  }
  removeSkillFormControlByIndex(index) {
    console.log(index);
    (this.studentRegForm.controls.skills as FormArray).removeAt(index);
  }
}

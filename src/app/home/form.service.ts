import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  createForm(arr) {
    const formGroup = new FormGroup({});
    for (let index = 0; index < arr.length; index++) {
      const formControl = new FormControl();
      formGroup.addControl(arr[index], formControl);
    }
    return formGroup;
  }
}

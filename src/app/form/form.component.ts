import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import Post from '../posts/post.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnChanges {
  data: FormGroup;
  @Input()
  fields: string[];
  @Input()
  editMode: boolean;

  @Input()
  post: Post;
  // tslint:disable-next-line:no-output-native
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onSubmit = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onUpdate = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.data = this.fb.group({});
  }

  ngOnInit(): void {}
  ngOnChanges() {
    this.fields.forEach((el) => {
      const fc = new FormControl();
      this.data.addControl(el, fc);
    });
    if (this.editMode) {
      this.data.patchValue(this.post);
    }
  }

  submitData() {
    const event = this.editMode ? this.onUpdate : this.onSubmit;
    event.emit(this.data.value);
  }
}

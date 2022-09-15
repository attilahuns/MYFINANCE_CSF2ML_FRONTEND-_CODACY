import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { getrequestForms, State } from '../state/request.reducer';
import * as RequestAction from "../state/request.actions";
import { BreadcrumbService } from 'xng-breadcrumb';
import { TitleService } from 'src/app/core/services/title-service/title.service';

@Component({
  selector: 'f2ml-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

  private displayedFormSubject: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  displayedForm$ = this.displayedFormSubject.asObservable();

  title = 'How can we help ?';
  forms$ = this.store.select(getrequestForms);
  exampleForm!: FormGroup;

  constructor(private store: Store<State>, private titleService: TitleService, private formBuilder: FormBuilder, private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.exampleForm = this.formBuilder.group({
      bankName: ['', [ Validators.required ] ],
      bankCertificate: ['', [ Validators.required ] ],
    });
    this.store.dispatch(RequestAction.loadRequestForms());
    this.breadcrumbService.set('@new-request', 'New Request');
    this.titleService.setTitle('New Request');
  }

  displayForm(formId: number): void {
    if (formId === this.displayedFormSubject.getValue()) {
      this.displayedFormSubject.next(-1);
      return;
    }
    this.displayedFormSubject.next(formId);
  }
  submit() {
    if (this.exampleForm.valid) {
      console.log('the submitted Form is valid');
    }
  }

}

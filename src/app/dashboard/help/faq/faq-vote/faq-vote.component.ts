import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoteMetadata } from '../faq';
import { FaqService } from '../faq.service';

@Component({
  selector: 'f2ml-faq-vote',
  templateUrl: './faq-vote.component.html',
  styleUrls: ['./faq-vote.component.scss']
})
export class FaqVoteComponent implements OnInit {

  voteForm!: FormGroup;
  voteFormSubmitted = false;
  @Input() faqId!: number;
  @Input() metadata!: VoteMetadata;

  constructor(private formBuilder: FormBuilder, private faqService: FaqService) { }

  ngOnInit(): void {
    this.voteForm = this.formBuilder.group({
      vote: ['', [ Validators.required ] ],
    });
  }

  submit(): void {
    if (!this.voteForm.valid) {
      return
    }
    this.voteFormSubmitted = true;
    const form = this.voteForm.value;
    this.faqService.vote(this.faqId, form.vote)
  }

}

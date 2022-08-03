import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'f2ml-wysiwyg-displayer',
  templateUrl: './wysiwyg-displayer.component.html',
  styleUrls: ['./wysiwyg-displayer.component.scss']
})
export class WysiwygDisplayerComponent implements OnInit , AfterViewInit {

  @ViewChild('content') content!: ElementRef<HTMLElement>;
  @Input() html = '';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const element = (<HTMLElement>this.content.nativeElement).querySelector('a');
    if (element) {
      const url = element.getAttribute('href') as string;
      element.addEventListener('click', (e) => this.navigate(e, url))
    }
  }

  navigate(event: Event, url: string) {
    event.preventDefault();
    if (url.startsWith('http')) {
      window.open(url, '_blank');
      return;
    }
    this.router.navigateByUrl(url);
  }

}

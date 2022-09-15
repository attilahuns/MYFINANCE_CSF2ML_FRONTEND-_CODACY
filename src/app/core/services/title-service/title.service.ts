import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private titleService: Title) { }

  setTitle(title: string) {
    const rootTitle = this.titleService.getTitle();
    this.titleService.setTitle(`${rootTitle} | ${title}`)
  }
}

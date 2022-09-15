import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TemplatePageTitleStrategyService extends TitleStrategy {
  static readonly rootTitle = 'MYFINANCE JVIT';

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${TemplatePageTitleStrategyService.rootTitle} | ${title}`);
      return;
    }
    this.title.setTitle(TemplatePageTitleStrategyService.rootTitle);
  }
}

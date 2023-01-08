import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CustomTitleStrategyService extends TitleStrategy {
  title = inject(Title);

  constructor() {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    if (title) {
      this.title.setTitle(`Plutus | ${title}`);
    }
  }
}

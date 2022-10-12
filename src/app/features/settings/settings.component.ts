import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICurrency } from '@fts-models';
import { userSettingsActions } from '@fts-store/actions';
import { Store } from '@ngrx/store';
import { SettingsStore } from './settings.store';

@Component({
  selector: 'fts-settings',
  templateUrl: './settings.component.html',
  styles: [
    `
      nz-select {
        width: 9.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SettingsStore],
})
export class SettingsComponent {
  constructor(private store: Store, protected settingsStore: SettingsStore) {}

  loadCurrencyList(): void {
    this.settingsStore.loadCurrencyList();
  }

  setPreferredCurrency(currency: ICurrency) {
    this.store.dispatch(
      userSettingsActions.setUserSettings({ settings: { preferredCurrency: currency } })
    );
  }

  currencyListTrackBy(index: number, currency: ICurrency): number {
    return currency.id;
  }

  compareFn(optionOne: ICurrency, optionTwo: ICurrency): boolean {
    return optionOne.id === optionTwo.id;
  }
}

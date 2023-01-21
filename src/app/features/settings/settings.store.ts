import { inject, Injectable } from '@angular/core';
import { ICurrency } from '@fts-models';
import { selectUserSettingsState } from '@fts-store/user-settings';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { ISettingsFeatureVM } from './models/settings-vm.model';
import { CurrencyApiService } from './services/currency-api.service';

export interface ISettingsFeatureState {
  currencyList: ICurrency[];
}

const initialState: ISettingsFeatureState = {
  currencyList: [],
};

@Injectable()
export class SettingsStore extends ComponentStore<ISettingsFeatureState> {
  readonly store = inject(Store);
  readonly currencyApiService = inject(CurrencyApiService);
  readonly message = inject(NzMessageService);

  readonly settingsVM$: Observable<ISettingsFeatureVM> = this.select(
    this.store.select(selectUserSettingsState),
    this.select((state) => state),
    (userSettings, settingsFeatureState) => ({
      userSettings,
      settingsFeatureState,
    })
  );

  readonly setCurrencyList = this.updater(
    (state, currencyList: ICurrency[]): ISettingsFeatureState => ({
      ...state,
      currencyList: [...state.currencyList, ...currencyList],
    })
  );

  readonly loadCurrencyList = this.effect(() => {
    return this.currencyApiService.getCurrencyList().pipe(
      tapResponse(
        (currencyList) => this.setCurrencyList(currencyList),
        () =>
          this.message.error(
            'Failed to load currency list. Please setup preferred currency in the profile page.'
          )
      )
    );
  });

  constructor() {
    super(initialState);
  }
}

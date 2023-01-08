import { inject, Injectable } from '@angular/core';
import { Database, child, ref, get } from '@angular/fire/database';
import { ICurrency } from '@fts-models';
import { filter, from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  private readonly database = inject(Database);

  getCurrencyList(): Observable<ICurrency[]> {
    const dbRef = ref(this.database);
    const path = child(dbRef, 'currency-list');

    return from(get(path)).pipe(
      filter((snapshot) => snapshot.exists()),
      map((snapshot) => snapshot.val() as ICurrency[])
    );
  }
}

import { FtsLetDirective } from './let.directive';

export class FtsLetContext<T> {
  constructor(private ftsLetDirective: FtsLetDirective<T>) {}

  get $implicit(): T {
    return this.ftsLetDirective.data;
  }

  get ftsLet(): T {
    return this.ftsLetDirective.data;
  }
}

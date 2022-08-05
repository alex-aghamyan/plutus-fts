import { NgModule } from '@angular/core';
import { FtsLetDirective } from '../directives/let/let.directive';

@NgModule({
  declarations: [FtsLetDirective],
  exports: [FtsLetDirective],
})
export class SharedModule {}

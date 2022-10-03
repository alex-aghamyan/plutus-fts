import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzCheckboxModule,
    NzModalModule,
    NzAvatarModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzSelectModule,
    NzDividerModule,
    NzMessageModule,
    NzPageHeaderModule,
    NzProgressModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
  ],
})
export class NgZorroModule {}

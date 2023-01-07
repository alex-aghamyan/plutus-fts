import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'fts-main-menu',
  standalone: true,
  imports: [RouterModule, NzMenuModule, NzIconModule],
  template: `
    <ul nz-menu>
      <li nz-menu-item nzMatchRouter>
        <span nz-icon nzType="dashboard" nzTheme="twotone"></span>
        <a routerLink="dashboard">Dashboard</a>
      </li>
      <li nz-menu-item nzMatchRouter>
        <span nz-icon nzType="wallet" nzTheme="twotone"> </span>
        <a routerLink="wallets">Wallets</a>
      </li>
      <li nz-menu-item nzMatchRouter>
        <span nz-icon nzType="tag" nzTheme="twotone"></span>
        <a routerLink="categories">Categories</a>
      </li>
      <li nz-menu-item nzMatchRouter>
        <span nz-icon nzType="account-book" nzTheme="twotone"> </span>
        <a routerLink="history">History</a>
      </li>
    </ul>
  `,
  styles: [
    `
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {}

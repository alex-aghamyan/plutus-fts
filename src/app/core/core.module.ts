import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from './modules/root-store.module';
import { FirebaseModule } from './modules/firebase.module';
import { LayoutModule } from './layout/layout.module';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootStoreModule,
    FirebaseModule,
    NzMessageModule,
  ],
  exports: [LayoutModule],
})
export class CoreModule {}

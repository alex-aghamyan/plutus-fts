import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from './modules/root-store.module';
import { FirebaseModule } from './modules/firebase.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RootStoreModule,
    FirebaseModule,
  ],
  exports: [LayoutModule],
})
export class CoreModule {}

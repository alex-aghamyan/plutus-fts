import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { RootStoreModule, FirebaseModule, NgZorroModule } from '@fts-modules';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootStoreModule,
    FirebaseModule,
    NgZorroModule,
  ],
  exports: [LayoutModule],
})
export class CoreModule {}

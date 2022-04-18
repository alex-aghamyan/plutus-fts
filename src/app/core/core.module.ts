import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RootStoreModule } from './modules/root-store.module';
import { FirebaseModule } from './modules/firebase.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RootStoreModule,
    FirebaseModule,
  ],
  exports: [LayoutComponent],
})
export class CoreModule {}

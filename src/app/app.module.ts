import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SignInModule } from './features/sign-in/sign-in.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, SignInModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

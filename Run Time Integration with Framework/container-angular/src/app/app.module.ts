import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VueAppComponent } from './vue-app/vue-app.component';
import { ReactAppComponent } from './react-app/react-app.component';

@NgModule({
  declarations: [
    AppComponent,
    VueAppComponent,
    ReactAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

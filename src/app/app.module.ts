import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ModeloComponent } from './modelo/modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreNosotrosComponent,
    ModeloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

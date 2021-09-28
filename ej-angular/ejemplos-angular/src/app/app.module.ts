import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteAManoComponent } from './componente-a-mano/componente-a-mano.component';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component'
import { FormsModule } from '@angular/forms';
import { EventosComponent } from './cmp-data-binding/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAManoComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    CmpDataBindingComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

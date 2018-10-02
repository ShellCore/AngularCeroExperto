import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Maps
import { AgmCoreModule } from '@agm/core';

// Components
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
        apiKey: "AIzaSyBRPl_6d53HFpbwbCpgLuyOfkoYceZ6Zok"
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
      MapaEditarComponent
  ]

})
export class AppModule { }

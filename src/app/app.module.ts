import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Shared */
import { AngularMaterialModule } from './shared/angular-material.module';

/* Services */
import { TitleService } from './core/services/title.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

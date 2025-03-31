import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <== Bunu ekle

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], // <== Buraya ekle
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

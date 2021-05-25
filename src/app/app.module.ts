import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RelojComponent } from './reloj/reloj.component';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { CardComponent } from './card/card.component';

registerLocaleData(es);

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  declarations: [AppComponent, RelojComponent, TodoComponent, CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

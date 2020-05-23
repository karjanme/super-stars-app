import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    NoopAnimationsModule
  ],
  providers: []
})
export class AppModule {}

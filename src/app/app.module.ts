import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicCompsComponent } from './dynamic-comps/dynamic-comps.component';
import { ApiMockService } from './api-mock.service';

@NgModule({
  declarations: [AppComponent, DynamicCompsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiMockService],
  bootstrap: [AppComponent],
})
export class AppModule {}

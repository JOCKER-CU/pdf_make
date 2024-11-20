import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { OutputPdfComponent } from '../../../pdf-make/src/app/container/output-pdf/output-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OutputPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

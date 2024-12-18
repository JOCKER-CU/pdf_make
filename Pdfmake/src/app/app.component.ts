import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfGeneratorService } from './pdf-generator.service';
import { FileuploadComponent } from './fileupload/fileupload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FileuploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pdfmake';

  constructor(private pdfGeneratorService: PdfGeneratorService) {
    
  }
  generatePdf() {
    // this.pdfGeneratorService.generatePdf();
  }
}

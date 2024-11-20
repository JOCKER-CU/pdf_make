import { Component } from '@angular/core';
import { PdfGeneratorService } from '../pdf-generator.service';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css'
})
export class FileuploadComponent {

  base64Image!: string;
  constructor(private pdfGeneratorService: PdfGeneratorService) { }

  onFileChange(event: any) {
    const file = event?.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Image = reader.result as string;
        console.log(this.base64Image);
        this.pdfGeneratorService.generatePdf(this.base64Image);
      };
      reader.onerror = (error) => {
        console.error('Error converting file to base64', error);
      };
    }
  }

}

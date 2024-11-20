import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import pdfMake, * as Pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { 
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


  }


  generatePdf(base64Image: string) {
    const docDefinition = {
      content: [
        { text: 'Hello world!', style: 'header' },
        'This is an example PDF generated using pdfMake in Angular.',
        {
          image: base64Image,
          width: 500
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        }
      }
    };

    pdfMake.createPdf(docDefinition).download('example.pdf');
  }
}
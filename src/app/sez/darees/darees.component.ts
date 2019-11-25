import { Component } from '@angular/core';
import { IpcService } from 'src/app/services/ipc.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-darees',
  templateUrl: './darees.component.html',
  styleUrls: ['./darees.component.scss']

})
export class DareesComponent {

  constructor(private ipc: IpcService) { }

  user: any = {};
  date: any = {};

  add() {
    this.ipc.send('dareescontri/addUser', 'addUser', this.user).then(res => {
      console.log(res);
      // this.ipc.send("asharacontri/getAllUsers", "getAllUsers", null).then(result => this.source.load(result.data));
      // event.confirm.resolve();
    });
  }



  getDocumentDefinition() {
    this.date = (this.user.Date).toDateString();
    return {
      content:
        [
          {
            text: ' Shabab ul Eid-iz Zahabi, Kalimi Mohalla ,Ratlam',
            alignment: 'center'
          },
          {
            text: ' 16 Raat Darees Voluntary Contribution Reciept',
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },
          {
            text: 'Date:  ' + this.date,
            alignment: 'right',
            margin: [0, 0, 0, 50]
          },
          {
            text: 'Received with thanks from :' + this.user.Name,
            margin: [0, 0, 0, 50]
          },
          {
            text: 'SEZ :' + this.user.SEZ,
            margin: [0, 0, 0, 50]
          },
          {
            text: 'Amount :' + numberToWords.toWords(1);,
            margin: [0, 0, 0, 50]
          }
        ]
    };
  }
  generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
  }

  reset() {
    this.user.Name = '';
    this.user.Date = '';
    this.user.SEZ = '';
    this.user.Amount = '';
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() { }


}

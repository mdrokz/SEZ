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
 
  constructor( private ipc: IpcService){}

  user: any = {};


  add() {
    this.ipc.send("dareescontri/addUser", "addUser", this.user).then(res => {
      console.log(res);
      // this.ipc.send("asharacontri/getAllUsers", "getAllUsers", null).then(result => this.source.load(result.data));
      // event.confirm.resolve();
    });
  }

  generatePdf(){
    // console.log(pdfMake);
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
   }

  ngOnInit() {
    
  }

}

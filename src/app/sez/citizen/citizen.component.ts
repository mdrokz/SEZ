import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from 'src/app/@core/data/smart-table';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.scss']
})
export class CitizenComponent implements OnInit {

  settings = {
    mode: 'inline',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Id: {
        title:'Id',
        type: 'string'
      },
      Name: {
        title:'Name',
        type: 'string'
      },
      Sector: {
        title:'Sector',
        type: 'string'
      },
      SEZCode: {
        title:'SEZCode',
        type: 'string'
      },
      Mobile: {
        title:'Mobile',
        type: 'string'
      }
    },
  };

  userData: any = {};

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private ipc: IpcService) {
    this.ipc.send("citizen/getAllUsers", "getAllUsers", null).then(res => {
      console.log(res);
      this.userData = res.data;
      // console.log(service.getData());
      this.source.load(res.data);
    });
  }

  add(event) {
    this.ipc.send("citizen/addUser", "addUser", event.newData).then(res => {
      console.log(res);
      this.ipc.send("citizen/getAllUsers", "getAllUsers", null).then(result => this.source.load(result.data));
      event.confirm.resolve();
    });
  }

  edit(event) {
    console.log(this.userData);
    this.ipc.send("citizen/editUser", "editUser", event.newData).then(res => {
      console.log(res);
      event.confirm.resolve();
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.ipc.send("citizen/deleteUser", "deleteUser", event.data).then(res => {
        console.log(res);
      })
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }



  ngOnInit() {



  }

}

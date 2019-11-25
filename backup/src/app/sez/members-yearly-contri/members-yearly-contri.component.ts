import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from 'src/app/@core/data/smart-table';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-members-yearly-contri',
  templateUrl: './members-yearly-contri.component.html',
  styleUrls: ['./members-yearly-contri.component.scss']
})
export class MembersYearlyContriComponent implements OnInit {

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
      ITS: {
        title:'ITS',
        type: 'string'
      },
      Mobile: {
        title:'Mobile',
        type: 'string'
      },
      1441: {
        title:'1441',
        type: 'string'
      },
      1442: {
        title:'1442',
        type: 'string'
      },
      1443: {
        title:'1443',
        type: 'string'
      },
      1444: {
        title:'1444',
        type: 'string'
      },
      1445: {
        title:'1445',
        type: 'string'
      },
      1446: {
        title:'1446',
        type: 'string'
      },
    },
  };

  userData: any = {};

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private ipc: IpcService) {
    this.ipc.send("yearlycontri/getAllUsers", "getAllUsers", null).then(res => {
      console.log(res);
      this.userData = res.data;
      // console.log(service.getData());
      this.source.load(res.data);
    });
  }

  add(event) {
    this.ipc.send("yearlycontri/addUser", "addUser", event.newData).then(res => {
      console.log(res);
      this.ipc.send("yearlycontri/getAllUsers", "getAllUsers", null).then(result => this.source.load(result.data));
      event.confirm.resolve();
    });
  }

  edit(event) {
    console.log(this.userData);
    this.ipc.send("yearlycontri/editUser", "editUser", event.newData).then(res => {
      console.log(res);
      event.confirm.resolve();
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.ipc.send("yearlycontri/deleteUser", "deleteUser", event.data).then(res => {
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

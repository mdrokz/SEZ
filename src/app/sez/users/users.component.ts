import { IpcService } from './../../services/ipc.service';
import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
        title: 'ID',
        type: 'number',
        editable: false
      },
      Name: {
        title: 'Name',
        type: 'string',
        class: 'error'
      },
      ITS: {
        title: 'ITS#',
        type: 'string',
      },
      Mobile: {
        title: 'Mobile',
        type: 'number',
      },
      Age: {
        title: 'Age',
        type: 'number',
      },
      Password: {
        title: 'Password',
        type: 'string'
      },
      Title: {
        title: 'Title',
        type: 'string',
      },
      SectorIncharge: {
        title: 'Sector Incharge',
        type: 'string'
      },
      SpecialSkills: {
        title: 'Special Skills',
        type: 'string'
      }
    },
  };

  userData: any = {};

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private ipc: IpcService) {
    this.ipc.send("user/getAllUsers", "getAllUsers", null).then(res => {
      console.log(res);
      this.userData = res.data;
      // console.log(service.getData());
      this.source.load(res.data);
    });
  }

  add(event) {
    if(event.newData.Name && event.newData.ITS && event.newData.Mobile) {
    this.ipc.send("user/addUser", "addUser", event.newData).then(res => {
      console.log(res);
      this.ipc.send("user/getAllUsers", "getAllUsers", null).then(result => this.source.load(result.data));
      event.confirm.resolve();
    });
  }
  }

  edit(event) {
    console.log(this.userData);
    this.ipc.send("user/editUser", "editUser", event.newData).then(res => {
      console.log(res);
      event.confirm.resolve();
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.ipc.send("user/deleteUser", "deleteUser", event.data).then(res => {
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

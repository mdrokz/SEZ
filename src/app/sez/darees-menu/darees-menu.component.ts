import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-darees-menu',
  templateUrl: './darees-menu.component.html',
  styleUrls: ['./darees-menu.component.scss']
})
export class DareesMenuComponent implements OnInit {
  boo = false;
  settings = {
    // actions: false,
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
      SR: {
        title: 'SR#',
        type: 'string'
      },
      Item: {
        title: 'Item',
        type: 'string'
      },
      QTY: {
        title: 'QTY',
        type: 'string',
        // renderComponent: SezDatepickerComponent
      },
    },
  };
  settings2 = {
    actions: false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      // confirmCreate: true
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
      SR: {
        title: 'SR#',
        type: 'string',
        editable: false,
        addable: false,
      },
      Item: {
        title: 'Item',
        type: 'string',
        editable: false,
        addable: false,
      },
      QTY: {
        title: 'QTY',
        type: 'string',
        editable: false,
        addable: false,
        // renderComponent: SezDatepickerComponent
      },
    },
  };

  userData: any = [];
  masterMenu: any = {};

  source: LocalDataSource = new LocalDataSource();
  constructor(private ipc: IpcService) { }

  createConfirm(event) {
    this.userData.push(event.newData);
    event.confirm.resolve();
  }

  ngOnInit() {
  }

  show() {
    this.boo = !this.boo;
  }

  edit(event) {
    console.log(this.userData);
    // this.ipc.send("asharacontri/editUser", "editUser", event.newData).then(res => {
    //   console.log(res);
    //   event.confirm.resolve();
    // });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      // this.ipc.send("asharacontri/deleteUser", "deleteUser", event.data).then(res => {
      //   console.log(res);
      // })
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  save() {
    console.log(this.masterMenu);
    this.ipc.send("dareesmenu/addMenuMaster", "addMenuMaster", this.masterMenu).then(res => {
      console.log(res);
    })
    this.ipc.send("dareesmenu/addMenuDetails", "addMenuDetail", this.userData).then(res => {
      console.log(res);
    });
  }

  cancel() {
    this.masterMenu = {};
  }

}

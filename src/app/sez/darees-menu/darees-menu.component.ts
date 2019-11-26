import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-darees-menu',
  templateUrl: './darees-menu.component.html',
  styleUrls: ['./darees-menu.component.scss']
})
export class DareesMenuComponent implements OnInit {
  IsAdding = false;
  settingsAdd = {
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
  settingsView = {
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
  menuData: any;
  source: LocalDataSource = new LocalDataSource();
  constructor(private ipc: IpcService) { }

  createConfirm(event) {
    this.userData.push(event.newData);
    event.confirm.resolve();
  }

  ngOnInit() {
    this.ipc.send("dareesmenu/getAllMenuData", "getAllMenuData", null).then(res => {
      this.menuData = res.data;
      console.log(res);
    })
  }

  show() {
    this.IsAdding = !this.IsAdding;
  }

  edit(event) {
    console.log(event);
    if (this.masterMenu.menuData) {
      this.masterMenu.menuData = event.newData;
      this.masterMenu.type = "edit";
      event.confirm.resolve();
    }
  }

  editData(data) {
    this.IsAdding = true;
    this.masterMenu = data;
    data.menuData.forEach(x => {
      this.userData.push(x);
    })
    this.source.load(this.userData);
    console.log(data);
  }

  deleteData(data) {
    this.IsAdding = true;
    this.masterMenu = data;
    data.menuData.forEach(x => {
      this.userData.push(x);
    })
    this.source.load(this.userData);
    console.log(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event);
      if (this.masterMenu.menuData) {
        this.masterMenu.menuData = event.data;
        this.masterMenu.type = "delete";
        event.confirm.resolve();
      }
    } else {
      event.confirm.reject();
    }
  }

  save() {
    console.log(this.masterMenu);
    debugger;
    if (!this.masterMenu.menuData) {
      this.ipc.send("dareesmenu/addMenuMaster", "addMenuMaster", { masterMenu: this.masterMenu, menuDetails: this.userData }).then(res => {
        this.masterMenu = {};
        this.userData = [];
        this.source.load(this.userData);
        this.IsAdding = false;
        console.log(res);
      })
    } else {
      if (!this.masterMenu.menuData.length) {
        if (this.masterMenu.type != "delete") {
          this.ipc.send("dareesmenu/addMenuMaster", "addMenuMaster", this.masterMenu).then(res => {
            this.masterMenu = {};
            this.userData = [];
            this.source.load(this.userData);
            this.IsAdding = false;
            console.log(res);
          });
        } else {
          this.ipc.send("dareesmenu/deleteUser", "deleteUser", this.masterMenu).then(res => {
            this.masterMenu = {};
            this.userData = [];
            this.source.load(this.userData);
            this.IsAdding = false;
            console.log(res);
          })
        }
      }
    }
  }
  cancel() {
    this.masterMenu = {};
  }

}

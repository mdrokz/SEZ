import { Component } from '@angular/core';
import { MENU_ITEMS } from '../shared/menu';


@Component({
    selector: 'ngx-sez',
    styleUrls: ['sez.component.scss'],
    templateUrl: './sez.component.html'
})
export class SezComponent {
    menu = MENU_ITEMS;
}

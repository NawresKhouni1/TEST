import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Token', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/token'] },
                    { label: 'Liste', icon: 'pi pi-fw pi-list' , routerLink: ['/liste'] }

                ]
            },
           
           
           
        ];
    }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { NavBarComponent } from './nav-bar.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [
        NavBarComponent,
        FooterComponent
    ],
    declarations: [
        NavBarComponent,
        FooterComponent
    ],
    providers: []
})

export class CoreModule { };
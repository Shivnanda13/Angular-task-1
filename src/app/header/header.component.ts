
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BuyNowComponent } from "../buynow/buynow.component";

@Component({
    selector : "app-header",
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.scss']
})


export class HeaderComponent{
    constructor(private matDialog : MatDialog ){}

    openDialog(){
        this.matDialog.open(BuyNowComponent,{
            width : '500px'
        })
    }
}

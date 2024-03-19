import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from "./header/header.component";
import { BuyNowComponent } from "./buynow/buynow.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardComponent } from "./card/card.component";
import { ProductServices } from "./shared/services/product.services";
import { TableServices } from "./shared/services/table.services";


@NgModule({
    declarations : [
        AppComponent,
        HeaderComponent,
        BuyNowComponent,
        CardComponent
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule
    ],
    providers : [
        ProductServices,
        TableServices,
        provideAnimationsAsync()
  ],
    bootstrap : [AppComponent]

})

export class AppModule{}
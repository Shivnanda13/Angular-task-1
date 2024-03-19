import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CardComponent } from "./card/card.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

const routes : Route[] = [
    
   ]
   
   @NgModule({
       imports : [
           RouterModule.forRoot(routes)
       ],
       exports : [
           RouterModule
       ]
   })
   
   export class AppRoutingModule{
   
   }
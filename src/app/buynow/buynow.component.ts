import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductServices } from "../shared/services/product.services";

@Component({
    selector : 'app-buynow',
    templateUrl : 'buynow.component.html',
    styleUrls : ['buynow.component.scss']
})

export class BuyNowComponent implements OnInit{
   constructor(private productServ : ProductServices){}
    myShoppingForm : FormGroup | any ;
    submitted = false ;

    ngOnInit(): void {
        this.myShoppingForm = new FormGroup({
            pImage : new FormControl("", Validators.required),
            pName : new FormControl("", Validators.required), 
            pPrice : new FormControl("", Validators.required),
            pQuantity : new FormControl("", Validators.required)
        })
        
    }

    onSubmit(){
        this.submitted = true ;
        console.log(this.myShoppingForm.value)
        this.productServ.postProduct(this.myShoppingForm.value);
        // this.productServ.getProduct();
        this.myShoppingForm.reset();
    }
}
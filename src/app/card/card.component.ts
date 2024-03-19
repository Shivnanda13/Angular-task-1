import { Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { ProductServices } from "../shared/services/product.services";
// import { Observable } from "rxjs";

@Component({
    selector : 'app-card',
    templateUrl : 'card.component.html',
    styleUrls : ['card.component.scss']
})

export class CardComponent implements OnInit{
    data : any[] = [];
    product : any[] = [];
    totalprice : number = 0 ;
    minusPvalue : any;
    constructor (private productServ : ProductServices){}
    
    ngOnInit(): void {
        this.getProductItem();
    }
    
    getProductItem(){
     this.productServ.getProduct().subscribe({
        next : (param : any)=>{ 
            this.data = param
        }
     }) 
    }
    
    quantityMax(item : {pQuantity : any}){
        if(item.pQuantity != 5 ){
           item.pQuantity++
        }
   }
   quantityMin(item : {pQuantity : any}){
       if(item.pQuantity != 0){
           item.pQuantity--
       }
       return;
   }

    onClick(param:any){
        const orderPrice = param.pPrice * param.pQuantity;
        this.product.push({tPrice:orderPrice,...param })
        param.pQuantity = 0
      this.totalprice = this.product.reduce((total,pro) => total + pro.tPrice, 0);
    }

    deletePro(productToRemove: any) {
        const indexToRemove = this.product.findIndex(product => product === productToRemove);
        const deletedPrice = this.product[indexToRemove].tPrice;
        this.product.splice(indexToRemove, 1);
        this.totalprice -= deletedPrice;

        // this.product = this.product.filter(product => product !== productToRemove);
        // console.log(productToRemove)
        // const minusPvalue = this.totalprice - parseInt(productToRemove)
        // console.log(minusPvalue)
      }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable()

export class ProductServices{
    constructor(private http : HttpClient){}
    items : any[] = [];
    private proUrl = "https://shopping-project-163c3-default-rtdb.firebaseio.com/product.json";

    postProduct(payload : any){
         this.http.post(this.proUrl, payload).subscribe({
            next : (param : any)=>{ 
                console.log(param)
            } 
         })
         
    }

    getProduct(): Observable<any> {
        return this.http.get<any[]>(this.proUrl).pipe(map((prod: any) => {
            const myPrdArr = []
            for(let prodId in prod) {
                myPrdArr.push({ ...prod[prodId] });
            }
            return myPrdArr
    }));
}
}

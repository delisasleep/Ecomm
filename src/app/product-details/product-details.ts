import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyproductItem } from '../interfaces/dummyproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit{

  productURL: string = "https://dummyjson.com/products/"
  product: DummyproductItem = {} as DummyproductItem;
  constructor(private route: ActivatedRoute, private http: HttpClient, private changeDetect: ChangeDetectorRef) { }

  ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get("productID");
      console.log(id);
      this.http.get<DummyproductItem>(this.productURL + "/" + id).subscribe ( res => {
        console.log(res);
        this.changeDetect.detectChanges();
        this.product = res;
      });
  }
}

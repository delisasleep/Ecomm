import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Dummyproduct, DummyproductItem } from '../interfaces/dummyproduct';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dummyproducts',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './dummyproducts.html',
  styleUrls: ['./dummyproducts.scss'],
})
export class Dummyproducts implements OnInit {
  products: DummyproductItem[] = [];
  productsURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient, private changeDetect: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.http.get<Dummyproduct>(this.productsURL).subscribe(res => {

      this.products = res.products;
      console.log(this.products);
      this.changeDetect.detectChanges();
    });


  }

    deleteProduct(id:number){

    }
  convertTitle(title: string) {
    const urlFriendly = decodeURIComponent(title)
      .trim()
      .replace(/[^a-zA-Z0-9\s-]/g, "") // remove special characters
      .replace(/\s+/g, "-") // replace spaces with dashes
      .replace(/-+/g, "-") // remove duplicate dashes
      .replace(/^-|-$/g, "") // remove starting/ending dashes
      .toLowerCase();

    return urlFriendly;
  }

}

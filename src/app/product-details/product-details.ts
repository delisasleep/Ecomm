import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyproductItem } from '../interfaces/dummyproduct';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss'],
})
export class ProductDetails implements OnInit {
  protected readonly product = signal<DummyproductItem | null>(null);
  private readonly productURL = 'https://dummyjson.com/products';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly changeDetect: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('productID');
    if (id) {
      this.http.get<DummyproductItem>(`${this.productURL}/${id}`).subscribe((res) => {
        this.product.set(res);
        this.changeDetect.detectChanges();
      });
    }
  }
}

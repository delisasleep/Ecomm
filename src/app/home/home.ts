import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  products:Product[] = [
    {
      pTitle: 'Product 1',
      pDescription: 'Description for Product 1',
      pPrice: 699.99,
      pImage: '/waistcoat.png'
    },
    {
      pTitle: 'Product 2',
      pDescription: 'Description for Product 2',
      pPrice: 899.99,
      pImage: '/pocketwatch.png'
    },
    {
      pTitle: 'Product 3',
      pDescription: 'Description for Product 3',
      pPrice: 1099.99,
      pImage: '/tophat.png'
    },
    {
      pTitle: 'Product 4',
      pDescription: 'Description for Product 4',
      pPrice: 1299.99,
      pImage: '/cane.png'
    },
  ];
}
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

products = [
  ["milk","dairy", 5 , 1.5],
  ["bread","Bakery", 55 , 1],
  ["pony","toy", 20 , 10],
  ["cheese","dairy", 100 ,3],
  ["short","clothing",11 , 10.5]
]

}

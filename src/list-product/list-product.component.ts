import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
products : Product | undefined

ListProductComponent(private )
}

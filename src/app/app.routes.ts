import { Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';

export const routes: Routes = [ {
  path:'',
  children: [
    { path: 'Listproducts', component:ListProductComponent}
  ]
}



];

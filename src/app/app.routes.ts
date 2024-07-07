import { Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ModalComponent } from './widgets/modal/modal.component';

export const routes: Routes = [ {
  path:'',
  children: [
    { path: 'listproducts', component: ListProductComponent},
  ]
}



];

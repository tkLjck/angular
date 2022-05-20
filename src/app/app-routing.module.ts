import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'blog',component: BlogComponent},
  {path: 'lienhe',component: LienheComponent},
  {path: 'dangki', component: DangkiComponent},
  {path: 'dangnhap',component: DangnhapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

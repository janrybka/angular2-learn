import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { ProductService } from './product.service';
import { ProductDetailGuard } from './product-guard.service';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'product/:id', component: ProductDetailComponent,
                canActivate: [ProductDetailGuard]
            },
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule { }

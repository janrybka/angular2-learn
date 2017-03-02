import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './iproduct';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    moduleId: module.id
})
export class ProductDetailComponent implements OnInit {
    @Input() productInfo: IProduct;

    ngOnInit() {
        console.log(JSON.stringify(this.productInfo));
    }
}
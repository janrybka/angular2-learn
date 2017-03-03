import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './iproduct';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    moduleId: module.id
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    @Input() productInfo: IProduct;

    constructor(private _route: ActivatedRoute,
        private _router: Router) {

    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        console.log(JSON.stringify(this.productInfo));
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
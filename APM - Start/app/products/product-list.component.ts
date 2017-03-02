import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './product.service'

@Component({
    //selector: 'pm-products',
    moduleId: module.id,
    templateUrl: './product-list.component.html',
    styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent 
        implements OnInit {
    pageTitle: string = "Product List 1";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;
    selectedProduct: IProduct;

    constructor(private _productService: ProductService) { 
    }

    onSelectProduct(): void {
        
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => {
                    this.products = products;
                    this.selectedProduct = products[1];
                },
                error => this.errorMessage  = <any>error
            );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductStock } from 'src/app/models/ProductStock';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  stockId:number;
  QuantityUnit:number;
  qualityCheck:string;
  pricePerUnit:number;
  response:string;
  submitted:boolean=false;
  stockIds:number[];
  productStock:ProductStock[]
  stock:ProductStock
  constructor(private productService: ProductService) { 
   // this.stockIds=this.productService.getProductStockId();
   this.productStock=this.productService.getProductStock();
  }

  ngOnInit(): void {
  }
onSubmit(){
  this.stockId=this.stock.stockId;
  this.response=this.productService.updateStock(this.stockId,this.QuantityUnit,this.pricePerUnit,this.qualityCheck);
  this.submitted=true;
  this.signupForm.reset();
}

}

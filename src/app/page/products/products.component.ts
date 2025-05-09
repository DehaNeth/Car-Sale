import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from "../../common/sub-component/product/product.component";

@Component({
  selector: 'app-products',
  imports: [RouterModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}

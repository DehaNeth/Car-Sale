import { Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { ProductsComponent } from './page/products/products.component';
import { CartComponent } from './page/cart/cart.component';
import { LoginComponent } from './page/login/login.component';
import { ReseachComponent } from './page/reseach/reseach.component';
import { ElectricComponent } from './page/sub-page/electric/electric.component';
import { MaterialsComponent } from './page/sub-page/materials/materials.component';
import { AutonomousComponent } from './page/sub-page/autonomous/autonomous.component';

export const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "login",
    component: LoginComponent

  },
  {
    path: "research",
    component: ReseachComponent,
    children:[
      {
        path: "",
        component: ElectricComponent
      },
      {
        path: "materials",
        component: MaterialsComponent
      },
      {
        path: "autonomous",
        component: AutonomousComponent
      }
    ]
  }
];

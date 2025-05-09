import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElectricComponent } from "../sub-page/electric/electric.component";
import { MaterialsComponent } from "../sub-page/materials/materials.component";
import { AutonomousComponent } from "../sub-page/autonomous/autonomous.component";

@Component({
  selector: 'app-reseach',
  imports: [RouterModule, ElectricComponent, MaterialsComponent, AutonomousComponent],
  templateUrl: './reseach.component.html',
  styleUrl: './reseach.component.css'
})
export class ReseachComponent {

}

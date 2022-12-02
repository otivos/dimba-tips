import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'

const material = [
  MatButtonModule,
  MatSidenavModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

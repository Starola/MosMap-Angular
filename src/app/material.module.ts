import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule,
  MatSidenavModule,
  MatGridListModule,
  MatExpansionModule,
  MatListModule,
  MatStepperModule,
  MatRadioModule,
  MatSelectModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSidenavModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSidenavModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}

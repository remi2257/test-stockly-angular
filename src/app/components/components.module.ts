import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials.module';

@NgModule({
  declarations: [HomeComponent, PhotoViewComponent],
  imports: [CommonModule, BrowserModule, MaterialsModule, RouterModule],
})
export class ComponentsModule {}

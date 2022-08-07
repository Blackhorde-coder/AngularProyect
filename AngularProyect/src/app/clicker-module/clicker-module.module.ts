import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickerModuleRoutingModule } from './clicker-module-routing.module';
import { ClickerComponent } from './components/clicker/clicker.component';


@NgModule({
  declarations: [
    ClickerComponent
  ],
  imports: [
    CommonModule,
    ClickerModuleRoutingModule
  ],
  exports: [
    ClickerComponent
  ]
})
export class ClickerModuleModule { }

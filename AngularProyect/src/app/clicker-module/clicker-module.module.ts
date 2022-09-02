import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickerModuleRoutingModule } from './clicker-module-routing.module';
import { ClickerComponent } from './components/clicker/clicker.component';
import { ClickerPageComponent } from './pages/clicker-page/clicker-page.component';


@NgModule({
  declarations: [
    ClickerComponent,
    ClickerPageComponent
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

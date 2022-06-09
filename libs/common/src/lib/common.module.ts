import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class CommonModule {}

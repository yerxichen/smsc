import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CpuDetailPage } from './cpu-detail';

@NgModule({
  declarations: [
    CpuDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CpuDetailPage),
  ],
})
export class CpuDetailPageModule {}

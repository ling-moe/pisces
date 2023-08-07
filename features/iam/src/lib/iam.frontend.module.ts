import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { iamBackendRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(iamBackendRoutes), RouterModule],
})
export class IamFrontendModule {}

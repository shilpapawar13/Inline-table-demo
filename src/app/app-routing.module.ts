import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualscrollComponent } from './virtualscroll/virtualscroll.component';
import { InlineComponent } from './inline/inline.component';
import { InlineCellEditComponent } from './inline-cell-edit/inline-cell-edit.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';

const routes: Routes = [
  { path: 'virtual-scroll', component: VirtualscrollComponent },
  { path: 'inline-row-edit', component: InlineComponent },
  { path: 'inline-cell-edit', component: InlineCellEditComponent },
  { path: 'inline-cell-edit', component: InlineCellEditComponent },
  { path: 'reusable-table', component: ReusableTableComponent },

  // { path: '', redirectTo: '/virtual-scroll', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InlineComponent } from './inline/inline.component';
import { FormsModule } from '@angular/forms';
import { InlineCellEditComponent } from './inline-cell-edit/inline-cell-edit.component';
import { VirtualscrollComponent } from './virtualscroll/virtualscroll.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReusableTableChildComponent } from './reusable-table-child/reusable-table-child.component';
 
@NgModule({
  declarations: [
    AppComponent,
    InlineComponent,
    InlineCellEditComponent,
    VirtualscrollComponent,
    ReusableTableComponent,
    ReusableTableChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ScrollingModule,
    FormsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

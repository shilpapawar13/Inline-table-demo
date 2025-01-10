import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reusable-table-child',
  templateUrl: './reusable-table-child.component.html',
  styleUrls: ['./reusable-table-child.component.css']
})
export class ReusableTableChildComponent <T extends { [key: string]: any }> implements OnInit,OnChanges {
  @Input() data: T[] = [];
  @Input() columns: any[] = [];
  @Input() expandableKey: string = '';
  @Input() selectedRowSize: string = '';
  @Input() selectedColumnSize: string = '';
  @Input() stickyHeader = false;
  @Input() stickyRowIndices: number[] = [];
  @Input() stickyColumns: string[] = [];

  rowHeight: number = 40;
  columnsToDisplay: string[] = [];
  dataSource!: MatTableDataSource<T>;
  expandedElement!: any;
  
  
  ngOnInit(): void {
    this.columnsToDisplay = this.columns ? 
    this.columns.map(col => col.key).filter(col => col !== this.expandableKey) : [];
    if (!this.columnsToDisplay.includes('action')) {
      this.columnsToDisplay.push('action');
    }
    this.dataSource = new MatTableDataSource(this.data);
  }
  ngOnChanges(): void {
    console.log(this.selectedRowSize)
    this.updateRowHeight();
  }
  
  updateRowHeight(): void {
    switch (this.selectedRowSize) {
      case 'small-size':
        this.rowHeight = 10;
        break;
      case 'large-size':
        this.rowHeight = 70;
        break;
      default:
        this.rowHeight = 50; 
    }
  }
  isStickyRow(row: any): boolean {
    const rowIndex = this.dataSource.data.indexOf(row);
    return this.stickyRowIndices.includes(rowIndex);
  }
  isStickyColumn(column: string): boolean {
    return this.stickyColumns.includes(column);
  }
  getMoreDetailsKeys(details: any[]): string[] {
    if (!details || details.length === 0) {
      return [];
    }
    return Object.keys(details[0]); 
  }

}

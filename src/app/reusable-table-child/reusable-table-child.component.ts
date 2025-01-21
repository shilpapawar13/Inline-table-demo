import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
 
@Component({
  selector: 'app-reusable-table-child',
  templateUrl: './reusable-table-child.component.html',
  styleUrls: ['./reusable-table-child.component.css']
})
export class ReusableTableChildComponent <T extends { [key: string]: any }> implements OnInit,OnChanges,AfterViewInit {
  @Input() data: T[] = [];
  @Input() columns: any[] = [];
  @Input() expandableKey: string = '';
  @Input() selectedRowSize: string = '';
  @Input() selectedColumnSize: string = '';
  @Input() stickyHeader = false;
  @Input() stickyRowIndices: number[] = [];
  @Input() stickyColumns: string[] = [];
  @ViewChildren('rowRef') rowRefs!: QueryList<ElementRef>;
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
    this.updateRowHeight();
  }
  ngAfterViewInit(): void {
    this.updateRowClass();
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
  getColumnSizeClass(): string {
    switch (this.selectedColumnSize) {
      case '10%':
        return 'small-column';
      case '100%':
        return 'large-column';
      default:
        return 'medium-column';
    }
  }
  updateRowClass(): void {
    if (this.rowRefs) {
      this.rowRefs.forEach((rowRef: ElementRef) => {
        const rowElement = rowRef.nativeElement;
        if (this.rowHeight > 50) {
          rowElement.classList.add('large-row');
        } else {
          rowElement.classList.remove('large-row');
        }
      });
    }
  }
  toggleExpand(element: T): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }
  
  
}
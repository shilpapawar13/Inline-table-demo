import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-inline-cell-edit',
  templateUrl: './inline-cell-edit.component.html',
  styleUrls: ['./inline-cell-edit.component.css']
})
export class InlineCellEditComponent {
  displayedColumns: string[] = ['id', 'name', 'username'];
  usersData: any[] = []; 
  isEditing: Record<number, Record<string, boolean>> = {};
  pendingEdits: Record<number, Record<string, any>> = {};
  savedEdits: any[] = [];

  originalData: any[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getusersData().subscribe((data: any) => {
      this.usersData = data;
      this.originalData = JSON.parse(JSON.stringify(data));

    });
  }

  startEditing(rowId: number, column: string) {
    if (!this.isEditing[rowId]) {
      this.isEditing[rowId] = {};
    }
    this.isEditing[rowId][column] = true;
  }

  updatePendingEdit(rowId: number, column: string, value: any) {
    if (!this.pendingEdits[rowId]) {
      this.pendingEdits[rowId] = {};
    }
    this.pendingEdits[rowId][column] = value;
  }

  saveCell(rowId: number, column: string) {
    const pendingValue = this.pendingEdits[rowId]?.[column];
    if (pendingValue !== undefined) {
      const rowIndex = this.usersData.findIndex((row) => row.id === rowId);
      if (rowIndex !== -1) {
        this.usersData[rowIndex][column] = pendingValue;
      }
      delete this.pendingEdits[rowId][column];
      if (Object.keys(this.pendingEdits[rowId]).length === 0) {
        delete this.pendingEdits[rowId];
      }
    }
    this.isEditing[rowId][column] = false;
  }

  cancelEdit(rowId: number, column: string) {
    if (this.isEditing[rowId]) {
      this.isEditing[rowId][column] = false;
    }
    if (this.pendingEdits[rowId]?.[column] !== undefined) {
      delete this.pendingEdits[rowId][column];
    }
  }

  bulkSave() {
    Object.keys(this.pendingEdits).forEach((rowId) => {
      const rowIndex = this.usersData.findIndex((row) => row.id === +rowId);
      if (rowIndex !== -1) {
        const rowEdits = this.pendingEdits[+rowId];
        const originalRow = { ...this.usersData[rowIndex] };
        const editedRow = { ...this.usersData[rowIndex] };

        for (const column in rowEdits) {
          editedRow[column] = rowEdits[column];
        }

        this.savedEdits.push({ original: originalRow, edited: editedRow });
      }
    });

    console.log('Edited Data:', this.savedEdits);

    this.pendingEdits = {}; 
    this.isEditing = {};
  }

  cancelAllEdits() {
    this.usersData = JSON.parse(JSON.stringify(this.originalData));
    this.pendingEdits = {};
    this.isEditing = {};
  }

}

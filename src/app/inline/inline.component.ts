import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent {
  displayedColumns: string[] = ["id", "name", "username", "actions"];
  usersData: any[] = [];
  isEditing: { [key: number]: boolean } = {};
  updatedRows: { [key: number]: any } = {};
  finalUpdatedData: any[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getusersData().subscribe((data: any) => {
      this.usersData = data;
    });
  }

  editRow(id: number): void {
    this.isEditing[id] = true; // Enable editing for the clicked row
  }

  toggleEditing(rowId: number, editing: boolean) {
    if (!editing) {
      const updatedRow = this.usersData.find((row) => row.id === rowId);
      if (updatedRow) this.updatedRows[rowId] = { ...updatedRow };
    }
    this.isEditing[rowId] = editing;
  }

  bulkSave() {
    this.finalUpdatedData = Object.values(this.updatedRows);
    console.log('Final Updated Data:', this.finalUpdatedData);

    this.updatedRows = {};
    this.isEditing = {};
  }

  cancelEdit(rowId: number) {
    this.isEditing[rowId] = false;
  }

  saveEdit(rowId: number, column: string, value: any) {
    if (!this.updatedRows[rowId]) {
      this.updatedRows[rowId] = { ...this.usersData.find((row) => row.id === rowId) };
    }
    this.updatedRows[rowId][column] = value;
    this.finalUpdatedData = Object.values(this.updatedRows);
  }
}

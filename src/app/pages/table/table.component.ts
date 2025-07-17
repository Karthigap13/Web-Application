import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TABLE_COLUMNS_CONFIG } from '../../config/table-columns-config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges {
  @Input() node: string | null = null;

  columns: { header: string, key: string }[] = [];
  tableData: any[] = [];
  filteredTableData: any[] = [];
  selectedRows: any[] = [];
  selectedFilterColumn = '';
  filterValue = '';

  constructor(private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['node'] && this.node) {
      this.loadTableConfig();
    }
  }

  loadTableConfig() {
    this.columns = TABLE_COLUMNS_CONFIG[this.node!] || [];
    this.http.get<any>('/table-data.json').subscribe(jsonData => {
      this.tableData = (jsonData[this.node!] || []).map((row: any) => ({
        ...row,
        selected: false
      }));
      this.filteredTableData = [...this.tableData];
    });
  }

  addNewRow() {
    const newRow: any = {};
    this.columns.forEach(col => {
      if (col.header !== 'Select') {
        newRow[col.key] = '';
      }
    });
    newRow.selected = false;
    newRow.isNew = true;
    this.tableData.push(newRow);
    this.filteredTableData = [...this.tableData];
  }


  submitSelectedRows() {
    const selectedRows = this.tableData.filter(row => row.selected);
    if (selectedRows.length > 0) {
      localStorage.setItem('submittedRows', JSON.stringify(selectedRows));
      console.log('Submitted rows:', selectedRows);
      alert('Selected rows saved to local storage!');
      // this.tableData.forEach(row => row.selected = false);
      this.tableData.forEach(row => {
        row.selected = false;
        row.isNew = false;
      });
      this.filteredTableData = [...this.tableData];
    } else {
      alert('No rows selected!');
    }
  }

  getAvailableFilterColumns() {
    return TABLE_COLUMNS_CONFIG[this.node!] || [];
  }


  applyFilters() {
    this.filteredTableData = this.tableData.filter(row => {
      let matchesColumnFilter = true;
      let matchesValueFilter = true;
      
      if (this.selectedFilterColumn) {
        const colValue = (row[this.selectedFilterColumn] || '').toString().toLowerCase();
        matchesColumnFilter = colValue.includes(this.filterValue.toLowerCase());
      } else if (this.filterValue) {
        matchesValueFilter = this.columns
          .filter(col => col.header !== 'Select')
          .some(col =>
            (row[col.key] || '').toString().toLowerCase().includes(this.filterValue.toLowerCase())
          );
      }

      return matchesColumnFilter && matchesValueFilter;
    });
  }
}

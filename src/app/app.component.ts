import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TableComponent } from './pages/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ResourcesComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedSite: string = 'localsite';
  selectedTitle: string = 'Nodes';
  selectedSubItem: string = 'Oracle Database Server Groups';  


  onSelectionChanged(selection: { site: string, title: string, subItem: string }) {
    this.selectedSite = selection.site;
    this.selectedTitle = selection.title;
    this.selectedSubItem = selection.subItem;
  }
}

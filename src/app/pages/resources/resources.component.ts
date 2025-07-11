import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SIDEBAR_DATA, SidebarItem } from '../../config/sidebar-data';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit {
  @Output() selectionChanged = new EventEmitter<{ site: string, title: string, subItem: string }>();

  sidebarItems: SidebarItem[] = SIDEBAR_DATA;
  selectedSite = 'localsite';
  selectedTitle: string = 'Nodes'; // default title when page loads
  selectedSubItem: string = 'Oracle Database Server Groups';

  ngOnInit() {
    this.emitSelection();
  }

  selectNode(title: string, subItem: string) {
    this.selectedTitle = title;
    this.selectedSubItem = subItem;
    this.emitSelection();
  }

  emitSelection() {
    this.selectionChanged.emit({
      site: this.selectedSite,
      title: this.selectedTitle,
      subItem: this.selectedSubItem
    });
  }
}

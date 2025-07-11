import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [MatToolbarModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

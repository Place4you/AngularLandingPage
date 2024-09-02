import { CommonModule, NgFor } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [ NgFor, CommonModule ],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent {
  @ViewChild('iconGrid', { static: true }) iconGrid!: ElementRef<HTMLDivElement>;

  icons: string[] = [
    // 'fa-brands fa-apple',
    'fa-brands fa-google',
    'fa-brands fa-facebook',
    'fa-brands fa-instagram',
    'fa-brands fa-youtube',
    'fa-brands fa-whatsapp',
    'fa-brands fa-twitter',
    'fa-brands fa-amazon',
    'fa-brands fa-microsoft',
    // 'fa-brands fa-tiktok',
    // 'fa-brands fa-linkedin',
    // 'fa-brands fa-spotify',
    // 'fa-brands fa-github',
  ];

  }

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { DownloadComponent } from './download/download.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    DownloadComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}

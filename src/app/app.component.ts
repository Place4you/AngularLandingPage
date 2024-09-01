import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';
import { AboutComponent } from './Components/about/about.component';
import { ServiceComponent } from './Components/service/service.component';
import { CompaniesComponent } from './componenet/companies/companies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ServiceComponent , CompaniesComponent , HeaderComponent, NavbarComponent, HeroComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingPage';
}

import { Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { BenefitComponent } from './Components/benefit/benefit.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ServiceComponent } from './Components/service/service.component';

export const routes: Routes = [
        { path: 'hero', component: HeroComponent },
        { path: 'benefit', component: BenefitComponent },
        { path: 'feature', component: AboutComponent },
        { path: 'marketplace', component: ServiceComponent },
      
];

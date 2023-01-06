import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

//  Approach for adding pages to the project:
//
//  Generate a new module in the 'pages' folder. (ng g m PAGE_NAME)
//  Generate the base component for the page while being in the same directory. (ng g c PAGE_NAME)
//  Import the newly generated module into the 'app.module.ts' file.
//  Add the 'public static route():string {}' function in the newly generated 'PAGE_NAME.component.ts'.
//  Finally you can create a path to the new page by adding an option of path (PAGE_NAMEComponent.route) and the component itself.
//  An example of this can be seen below with the 'HomeComponent'

export const routes: Routes = [
  { path: '', redirectTo: HomeComponent.route, pathMatch: 'full' },
  { path: HomeComponent.route, component: HomeComponent },
];

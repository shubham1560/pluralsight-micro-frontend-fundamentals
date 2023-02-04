import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactAppComponent } from './react-app/react-app.component';
import { VueAppComponent } from './vue-app/vue-app.component';

const routes: Routes = [
  {
    path: 'react',
    component: ReactAppComponent
  },
  {
    path: 'vue',
    component: VueAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

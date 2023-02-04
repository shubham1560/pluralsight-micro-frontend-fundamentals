import { AfterContentInit, Component } from '@angular/core';
import {mount} from 'childVue/vueApp';

@Component({
  selector: 'app-vue-app',
  templateUrl: './vue-app.component.html',
  styleUrls: ['./vue-app.component.css']
})
export class VueAppComponent implements AfterContentInit{
  ngAfterContentInit(): void {
    const fetch_el = document.getElementById("vue-child");
    mount(fetch_el);
  }

}

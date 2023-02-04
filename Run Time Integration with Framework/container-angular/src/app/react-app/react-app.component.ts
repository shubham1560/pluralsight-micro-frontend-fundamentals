import { AfterContentInit, Component } from '@angular/core';
import {mount } from 'childReact/reactApp';
@Component({
  selector: 'app-react-app',
  templateUrl: './react-app.component.html',
  styleUrls: ['./react-app.component.css']
})
export class ReactAppComponent implements AfterContentInit{
  ngAfterContentInit(): void {
    const fetch_el = document.getElementById("react-child");
    mount(fetch_el);
  }
}

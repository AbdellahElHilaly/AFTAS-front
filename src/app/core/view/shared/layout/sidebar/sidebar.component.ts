import {Component, Output, EventEmitter, signal, WritableSignal} from '@angular/core';
import {SidebarService} from "./sidebar.service";
import {SidebarContent} from "./sidebar-content";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  protected readonly SidebarContent = SidebarContent;

  constructor(public sidebarService: SidebarService) {

  }

  changePage(content: SidebarContent) {
    this.sidebarService.contentShow.set(content)
  }


}

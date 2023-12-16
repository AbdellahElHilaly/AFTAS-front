import {Injectable, signal, WritableSignal} from '@angular/core';
import {SidebarContent} from "./sidebar-content";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public  contentShow:WritableSignal<SidebarContent> = signal(SidebarContent.Users);

  constructor() { }


}

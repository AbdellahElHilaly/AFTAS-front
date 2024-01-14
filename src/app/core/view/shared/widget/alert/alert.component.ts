import {Component, Input, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {ResponseStatus} from "../../layout/welcome/response-status";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit{
  @Input() responseStatus?: ResponseStatus;
  @Input() responseMessage?: String;

  ngOnInit(): void {
    initFlowbite();
  }

  protected readonly ResponseStatus = ResponseStatus;
}

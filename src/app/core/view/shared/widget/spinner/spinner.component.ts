import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }

}

import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-edit-competition',
  standalone: true,
  imports: [],
  templateUrl: './edit-competition.component.html',
  styleUrl: './edit-competition.component.css'
})
export class EditCompetitionComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

}

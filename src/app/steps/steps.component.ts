import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { StepsProgressService } from '../steps-progress.service';


@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})


export class StepsComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value: number 
  bufferValue = 100;

  constructor(private stepsProgressService: StepsProgressService) { }

  ngOnInit(): void {
    this.stepsProgressService.step_one_progress.subscribe(value => this.value = value)
  }
}

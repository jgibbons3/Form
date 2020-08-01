import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StepsProgressService {
  step_one_progress = new BehaviorSubject(20);

  incrementStep(increment: number) {
    this.step_one_progress.next(
      this.step_one_progress.value + increment
    )
  }

  constructor() { }
}

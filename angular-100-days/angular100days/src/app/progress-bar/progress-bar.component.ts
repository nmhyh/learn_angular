import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string | undefined;
  @Input('progress-color') progressColor: string | undefined;
  @Input() set progress(val: number) {
    // validation for progress
    if (typeof val != 'number') {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress;
      }
    }
    console.log('val', val);
    this._progress = val;
  };
  private _progress = 50;
  get progress() {
    return this._progress;
  }
  constructor() {
    // do not binding input
    console.log('constructor progress', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progessColor: this.progressColor,
    });
  }

  ngOnInit(): void {
    // had binding input
    console.log('ngOnInit progress', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progessColor: this.progressColor,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // use ngOnChanges for validation
    console.log('changes', changes);
    console.log('ngOnChanges progress', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progessColor: this.progressColor,
    });
  }
}

// new ProgressBarComponent() // invoke

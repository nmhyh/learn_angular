## App component
<app-hello [name]="name"></app-hello>

<p>
  <button
    (click)="currentProgress = currentProgress + 10">
    Increase Progress
  </button>
</p>
<app-progress-bar [progress]="currentProgress" [progress-color]="'blue'" [backgroundColor]="'#ccc'"></app-progress-bar>

## Progress bar component
<div
  class="progress-bar-container"
  [style.backgroundColor]="backgroundColor">
  <div
    class="progress"
    [style]="{
      backgroundColor: progressColor,
      width: progress + '%'
    }"
    ></div>
</div>


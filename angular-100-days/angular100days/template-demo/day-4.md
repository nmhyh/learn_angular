<app-hello *ngIf="user.age >= 18;else under18" [name]="user.name"></app-hello>

<ng-template #under18>
  <div>
    You are too young to see this content
  </div>
</ng-template>

<!-- <ng-template [ngIf]="user.age >= 18" [ngIfElse]="under18">
  <app-hello [name]="user.name"></app-hello>
</ng-template>

<ng-template #under18>
  <div>
    You are too young to see this content
  </div>
</ng-template> -->

<button (click)="user.age = user.age - 1">-</button>
Age: {{ user.age }}
<button (click)="user.age = user.age + 1">+</button>

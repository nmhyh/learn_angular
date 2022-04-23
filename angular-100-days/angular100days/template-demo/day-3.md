{{name}}
<!-- <app-hello></app-hello>
<app-hi></app-hi> -->

<!-- {{ expression }} -->
<p>{{ user?.name }}</p>
<p>{{ user?.age }}</p>

<!-- Document object model -> DOM -> HTMLInputElement -->
<input type="text" [value]="user.name">
<button type="button" (click)="handler($event)">Click me</button>

<!-- TWO WAY BINDING -->
<p>
  <!-- C1 -->
  <!-- <input type="text" name="" id="" [(ngModel)]="name" > -->
  <!-- C2 -->
  <input type="text" name="" id="" [ngModel]="name" (ngModelChange)="name = $event" >
</p>

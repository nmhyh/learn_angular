<app-hello [name]="name"></app-hello>

<button (click)="isDanger = !isDanger">
  Toggle Danger
</button>
<br>
<button (click)="isWarning = !isWarning">
  Toggle Warning
</button>

<!-- <div class="box"
  [class.red-border]="isDanger"
  [class.yellow-background]="isWarning"></div> -->
<!--
  - [class.name-class]
  - [class]="array"
  - [class]="object" {[name-class: string]: boolean}
  - [class]="variable"
 -->

<!-- <div class="box"
  [class]="['red-border', 'yellow-background']"></div> -->

<div class="box"
  [class]="classes"></div>

<!--
  - [style.nameStyle]
  - [style.name-style]
  - [style.tenStyle.unit]
  - [style]="object"
  - [style]="css-variable"
 -->
<!-- <p [style.color]="'white'"
  [style.backgroundColor]="'black'"
  [style.fontSize.rem]="2">
  Start editing to see some magic happen :)
</p> -->

<p [style.--text-color]="isDanger ? 'red' : 'blue'"
  [style]="{color: 'var(--text-color)', backgroundColor: 'yellow', fontSize: '2rem'}">
  Start editing to see some magic happen :)
</p>

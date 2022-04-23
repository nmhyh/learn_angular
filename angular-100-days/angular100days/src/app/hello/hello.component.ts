import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-hello',
  template: '<h2>Hello {{name}}</h2>'
})

export class HelloComponent {
  @Input() name: string | undefined;

  ngOnInit() {
    console.log('Hello init');
  }

  ngOnDestroy() {
    console.log('Hello destroy');
  }
}

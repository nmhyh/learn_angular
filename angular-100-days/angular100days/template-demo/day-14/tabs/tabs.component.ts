import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() navs: string[] | undefined;
  @Input() linkTemplate: TemplateRef<any> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

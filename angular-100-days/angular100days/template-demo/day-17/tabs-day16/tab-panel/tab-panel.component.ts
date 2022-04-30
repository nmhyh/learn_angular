import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import { TabContentDirective } from './tab-content.directive';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {
  @Input() title: string | undefined;
  // @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;
  @ViewChild(TemplateRef, { static: true }) implicitBody!: TemplateRef<unknown>;
  // lazy loading template
  @ContentChild(TabContentDirective, { static: true, read: TemplateRef }) explicitBody!: TemplateRef<unknown>;

  constructor(
    private tabGroup: TabGroupComponent
  ) { }

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }

  ngOnInit(): void {
    console.log('explicitBody', this.explicitBody);
    this.tabGroup.addTab(this);
  }

  ngOnDestroy() {
    console.log('ngOndestroy');
    this.tabGroup.removeTab(this);
  }
}

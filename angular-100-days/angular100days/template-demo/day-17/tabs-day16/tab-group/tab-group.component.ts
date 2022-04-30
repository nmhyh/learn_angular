import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter();
  @ContentChildren(TabPanelComponent) tabPanels!: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    console.log('ngAfterContentInit tabPanels', this.tabPanels);
    this.tabPanels.changes.subscribe(console.log)
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', this.tabPanelList[changes['activeIndex'].currentValue]);
  }

  addTab(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
  }

  removeTab(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp, index) => {
      if (tp === tab) {
        found = index;
        return false;
      }
      return true;
    })

    if (found === this.activeIndex) {
      this.activeIndexChange.emit(found === this.tabPanelList.length ? found - 1 : found);
    }
  }

  handleClickTab(index: number, tab: any) {
    console.log('click index', index, tab);
    this.activeIndexChange.emit(index);
  }
}

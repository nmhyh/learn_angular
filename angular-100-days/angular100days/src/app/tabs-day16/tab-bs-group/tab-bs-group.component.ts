import { Component, forwardRef } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

// forwardRef waiting component init
const tabBsGroupProviders = [{
  provide: TabGroupComponent,
  useExisting: forwardRef(() => TabBsGroupComponent),
}];

@Component({
  selector: 'app-tab-bs-group',
  templateUrl: './tab-bs-group.component.html',
  styleUrls: ['./tab-bs-group.component.css'],
  providers: tabBsGroupProviders,
})
export class TabBsGroupComponent extends TabGroupComponent{

}

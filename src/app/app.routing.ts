import {Routes} from '@angular/router';
import {RulesListComponent} from './rules/rules-list.component';
import {SensorsComponent} from './sensors/sensors.component';
import {RawDataComponent} from './rawdata/rawdata.component';

export function createAppRoutes(): Routes {
  return [
    {
      path: '',
      redirectTo: '/rules',
      pathMatch: 'full'
    },
    {
      path: 'rules',
      component: RulesListComponent
    },
    {
      path: 'sensors',
      component: SensorsComponent
    },
    {
      path: 'rawdata',
      component: RawDataComponent
    }
  ];
}

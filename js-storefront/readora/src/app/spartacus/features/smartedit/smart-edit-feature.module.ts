import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from "@spartacus/core";
import { SmartEditConfig, SmartEditRootModule, SMART_EDIT_FEATURE } from "@spartacus/smartedit/root";

@NgModule({
  declarations: [],
  imports: [
    SmartEditRootModule
  ],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [SMART_EDIT_FEATURE]: {
          module: () =>
            import('@spartacus/smartedit').then((m) => m.SmartEditModule),
        },
      }
    }),
    provideConfig(<SmartEditConfig>{
      smartEdit: {
        allowOrigin: 'localhost:9002,backoffice.c4aqvlqmeg-biocaresd1-d1-public.model-t.cc.commerce.ondemand.com:443,backoffice.c4aqvlqmeg-biocaresd1-s1-public.model-t.cc.commerce.ondemand.com:443,backoffice.c4aqvlqmeg-biocaresd1-p1-public.model-t.cc.commerce.ondemand.com:443',
      },
    })
  ]
})
export class SmartEditFeatureModule { }

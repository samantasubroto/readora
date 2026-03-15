import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadoraUpdateEmailComponent } from './readora-update-email.component';
import { CardModule, SpinnerModule } from '@spartacus/storefront';
import { AddressBookComponent, AddressFormModule } from '@spartacus/user/profile/components';
import { AuthGuard, CmsConfig, FeaturesConfigModule, I18nModule, provideConfig, provideDefaultConfig, UserAddressService } from '@spartacus/core';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    AddressFormModule,
    SpinnerModule,
    I18nModule,
    FeaturesConfigModule,
  ],
  declarations: [ReadoraUpdateEmailComponent],
  exports: [ReadoraUpdateEmailComponent],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        AccountAddressBookComponent: {
          component: ReadoraUpdateEmailComponent,
          guards: [AuthGuard],
        },
      },
    }),
    UserAddressService,
  ],
})
export class ReadoraUpdateEmailModule { }

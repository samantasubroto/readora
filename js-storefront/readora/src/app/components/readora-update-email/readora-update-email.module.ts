import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadoraUpdateEmailComponent } from './readora-update-email.component';
import { CardModule, SpinnerModule } from '@spartacus/storefront';
import { AddressBookComponent, AddressFormModule } from '@spartacus/user/profile/components';
import { AuthGuard, CmsConfig, FeaturesConfigModule, I18nModule, provideConfig, provideDefaultConfig, UserAddressService } from '@spartacus/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PRODUCT_COMPARE_FEATURE_KEY, ProductCompareEffects, productCompareReducer } from '../../store/product-compare';

@NgModule({
  declarations: [
    ReadoraUpdateEmailComponent,
  ],
  exports: [
    ReadoraUpdateEmailComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    AddressFormModule,
    SpinnerModule,
    I18nModule,
    FeaturesConfigModule,
    StoreModule.forFeature(PRODUCT_COMPARE_FEATURE_KEY, productCompareReducer),
    EffectsModule.forFeature([ProductCompareEffects]),
  ],
  providers: [
    UserAddressService,
    provideConfig(<CmsConfig>{
      cmsComponents: {
        AccountAddressBookComponent: {
          component: ReadoraUpdateEmailComponent,
          guards: [AuthGuard],
        },
      },
    }),
  ],
})
export class ReadoraUpdateEmailModule {}
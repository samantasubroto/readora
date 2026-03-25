import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadoraPlaceOrderComponent } from './readora-place-order.component';
import { CmsConfig, FeaturesConfigModule, I18nModule, provideConfig, UrlModule } from '@spartacus/core';
import { CartNotEmptyGuard, CheckoutAuthGuard } from '@spartacus/checkout/base/components';
import { AtMessageModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, IconModule, KeyboardFocusModule, SpinnerModule } from '@spartacus/storefront';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ReadoraPlaceOrderComponent
  ],
  imports: [
    AtMessageModule,
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    ReactiveFormsModule,
    IconModule,
    KeyboardFocusModule,
    SpinnerModule,
    FormErrorsModule,
    FeaturesConfigModule,
    FormRequiredAsterisksComponent,
    FormRequiredLegendComponent,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        CheckoutPlaceOrder: {
          component: ReadoraPlaceOrderComponent,
          guards: [CheckoutAuthGuard, CartNotEmptyGuard],
        },
      },
    }),
  ],
  exports: [
    ReadoraPlaceOrderComponent
  ],
})
export class ReadoraPlaceOrderModule { }

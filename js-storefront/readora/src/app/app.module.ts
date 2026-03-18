import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule, BaseStorefrontModule, StorefrontComponentModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ReadoraOccModule } from './occ';
import { ReadoraUpdateEmailModule } from './components';
import { provideConfig } from '@spartacus/core';
import { readoraCheckoutConfig } from './config/readora-checkout-config';
import { readoraTranslationChunksConfig, readoraTranslationsEn } from '../../public/translations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    SpartacusModule,
    ReadoraOccModule,
    BaseStorefrontModule,
    ReadoraUpdateEmailModule
  ],
  providers: [
    provideHttpClient(withFetch(), 
    withInterceptorsFromDi()), 
    provideHttpClient(withFetch(), 
    withInterceptorsFromDi()),
    provideConfig(readoraCheckoutConfig),
    provideConfig({
      i18n: {
        resources: { en: readoraTranslationsEn },
        chunks: readoraTranslationChunksConfig,
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

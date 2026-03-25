import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { provideConfig } from "@spartacus/core";
import { ProductCompareAdapter, RazorpayPaymentAdapter } from "../connectors";
import { ProductCompareOccAdapter, RazorpayPaymentOccAdapter } from "./adapter";
import { readoraOccConfig } from "./config";

@NgModule({
  imports: [CommonModule],
  providers: [
    provideConfig(readoraOccConfig),
    {
      provide: ProductCompareAdapter,
      useClass: ProductCompareOccAdapter,
    },
    {
      provide: RazorpayPaymentAdapter,
      useClass: RazorpayPaymentOccAdapter,
    },
  ],
})
export class ReadoraOccModule { }
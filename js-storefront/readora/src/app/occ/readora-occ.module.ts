import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { provideConfig } from "@spartacus/core";
import { ProductCompareAdapter } from "../connectors";
import { ProductCompareOccAdapter } from "./adapter";
import { readoraOccConfig } from "./config";

@NgModule({
  imports: [CommonModule],
  providers: [
    provideConfig(readoraOccConfig),
    {
      provide: ProductCompareAdapter,
      useClass: ProductCompareOccAdapter,
    },
  ],
})
export class ReadoraOccModule { }
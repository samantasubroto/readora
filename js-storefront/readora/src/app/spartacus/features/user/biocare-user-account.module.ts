import { NgModule } from "@angular/core";
import { BiocareUserAccountService } from "../../../service";
import { UserAccountModule } from "@spartacus/user";
import { UserAccountFacade } from "@spartacus/user/account/root";
import { BiocareUserAccountFacade } from "../../../facade/user";

@NgModule({
  imports: [UserAccountModule],
  providers: [
    BiocareUserAccountService,
    {
      provide: UserAccountFacade,
      useExisting: BiocareUserAccountService
    },
    {
      provide: BiocareUserAccountFacade,
      useExisting: BiocareUserAccountService
    },
  ],
})
export class BiocareUserAccountModule { }

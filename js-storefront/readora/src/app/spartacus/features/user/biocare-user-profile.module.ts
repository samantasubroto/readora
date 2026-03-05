import { NgModule } from "@angular/core";
import { UserProfileModule } from "@spartacus/user";
import { UserProfileFacade } from "@spartacus/user/profile/root";
import { BiocareUserProfileFacade } from "../../../facade/user";
import { BiocareUserProfileService } from "../../../service/user";

@NgModule({
  imports: [UserProfileModule],
  providers: [
    BiocareUserProfileService,
    {
      provide: UserProfileFacade,
      useExisting: BiocareUserProfileService
    },
    {
      provide: BiocareUserProfileFacade,
      useExisting: BiocareUserProfileService
    },
  ],
})
export class BiocareUserProfileModule { }
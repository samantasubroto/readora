import { Component, OnInit } from '@angular/core';
import { AddressBookComponent, AddressBookComponentService, UpdateEmailComponent } from '@spartacus/user/profile/components';
import { ProductCompareService } from '../../services';
import { GlobalMessageService, TranslationService } from '@spartacus/core';

@Component({
  selector: 'cx-readora-update-email',
  templateUrl: './readora-update-email.component.html',
  styleUrl: './readora-update-email.component.scss',
  standalone: false
})
export class ReadoraUpdateEmailComponent extends AddressBookComponent implements OnInit {

  constructor(
    override service: AddressBookComponentService, 
    override translation: TranslationService, 
    override globalMessageService: GlobalMessageService,
    protected productCompareService: ProductCompareService
  ) {
    super(service, translation, globalMessageService);
  }

  override ngOnInit(): void {
    this.productCompareService.getCompareProducts().subscribe({
      next: (data) => console.log('Compare products:', data),
      error: (err) => console.error('Error:', err),
    });
  }
}

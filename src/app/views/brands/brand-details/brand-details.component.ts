import { Component } from '@angular/core';
import { SbrandService } from '../services/sbrand.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss'],
})
export class BrandDetailsComponent {
  brandId: string = '';
  brandItem: any;

  constructor(
    private _sbrandService: SbrandService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService,
    private _translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.getBrandId();
    this.getSpecificBrand(this.brandId);
  }

  getBrandId() {
    this.brandId = this._activatedRoute.snapshot.params['brandId'];
  }

  getSpecificBrand(id: string) {
    this._sbrandService.GetSpecificBrand(id).subscribe({
      next: (response) => {
        this.brandItem = response.data;
      }
    });
  }
}

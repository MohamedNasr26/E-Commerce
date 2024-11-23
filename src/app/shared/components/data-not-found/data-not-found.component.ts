import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-data-not-found',
  templateUrl: './data-not-found.component.html',
  styleUrls: ['./data-not-found.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class DataNotFoundComponent {

}

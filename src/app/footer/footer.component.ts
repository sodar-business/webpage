import { Component } from '@angular/core';
import { COMPANY_EMAIL, COMPANY_FACKEBOOK, COMPANY_NAME, COMPANY_TEL } from '../company-information';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    readonly companyName: string = COMPANY_NAME;
    readonly tel: string = COMPANY_TEL;
    readonly facebook: string = COMPANY_FACKEBOOK;
    readonly email: string = COMPANY_EMAIL;

}

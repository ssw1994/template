import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';
  details = {
    WOID: '201911470427',
    AppointmentDate: "22-12-2019",
    customerPostcode: "HA4 6UT, 30 Edwards Avenue Worcester Worcestershire",
    woTitle: 12121212,
    Slot: "18:02 - 19:02",
    landline: "+1-541-754-3010",
    Mobile: "+919112195931",
    ServiceName: "Best TV Mounts",
    disclaimer: "Note: This e‐mail was automatically generated following your registration request with OrderWork. This e‐mail contains OrderWork Ltd Limited information, which may be privileged or confidential. It is meant only for use by the individual(s) or entity named above. If you are not the intended recipient, note that disclosing, copying, distributing or using this information is prohibited. If you have received this e-mail in error, please let me know immediately on the e‐mail address above. Thank you. We monitor our e‐mail system, and may record your e‐mails. OrderWork Ltd, Montpelier Chambers, 61‐63 High Street South, Dunstable, Bedfordshire LU6 3SF (Registration No 05662167)."
  }
}

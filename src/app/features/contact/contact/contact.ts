import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  submitting = false;
  submitted = false;
  failed = false;

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid || this.submitting) {
      return;
    }

    this.submitting = true;
    this.failed = false;

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Neue Anfrage über jana-wanzek.de',
      ...form.value,
    };

    this.http.post(WEB3FORMS_ENDPOINT, payload).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        form.resetForm();
      },
      error: () => {
        this.submitting = false;
        this.failed = true;
      },
    });
  }

}

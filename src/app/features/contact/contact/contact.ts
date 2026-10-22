import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const WEB3FORMS_ACCESS_KEY = '90fc9bae-3af0-40d6-8d91-deab2d62e2e5';
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

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'Neue Anfrage über jana-wanzek.de');
    Object.entries(form.value).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    this.http.post(WEB3FORMS_ENDPOINT, formData).subscribe({
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

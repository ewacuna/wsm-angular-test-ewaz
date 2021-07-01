import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private duration: number = 5000;

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title?: string, time?: number) {
    this.toastr.success(message, title, {
      timeOut: time || this.duration,
    });
  }

  showError(message: string, title?: string, time?: number) {
    this.toastr.error(message, title, {
      timeOut: time || this.duration,
    });
  }

  showWarning(message: string, title?: string, time?: number) {
    this.toastr.warning(message, title, {
      timeOut: time || this.duration,
    });
  }
}

import { Injectable, OnDestroy, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService implements OnDestroy {

    toasts: any[] = [];

    show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
        this.toasts.push({ textOrTpl, ...options });
    }

    remove(toast: any) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }

    clear() {
        this.toasts.splice(0, this.toasts.length);
    }

    ngOnDestroy(): void {
        this.clear();
    }

    error(text: string, delay?: number) {
        this.show(text, { classname: 'bg-danger text-light', delay: delay || 5000 });
    }

    success(text: string, delay?: number) {
        this.show(text, { classname: 'bg-success text-light', delay: delay || 5000 });
    }

    message(text: string, delay?: number) {
        this.show(text, { delay: delay || 5000 });
    }
}
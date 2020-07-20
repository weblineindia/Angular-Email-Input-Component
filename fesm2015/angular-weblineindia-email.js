import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

class EmailService {
    constructor() { }
}
EmailService.ɵprov = ɵɵdefineInjectable({ factory: function EmailService_Factory() { return new EmailService(); }, token: EmailService, providedIn: "root" });
EmailService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EmailService.ctorParameters = () => [];

class EmailComponent {
    constructor() {
        this.faPlus = faPlus;
        this.faMinus = faMinus;
        this.maxlength = 50;
        this.emailFormateError = 'Email is not valid';
        this.duplicateEmailError = 'Do not enter same email';
        this.name = '';
        this.id = '';
        this.disabled = false;
        this.value = '';
        this.isMultiple = true;
        this.placeholder = 'Email';
        this.isShowPlus = false;
        this.tabindex = 0;
        this.index = 0;
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.onPlus = new EventEmitter();
        this.isError = false;
        this.isUniqueError = false;
    }
    onChange(event, index) {
        let data = { event: event, index: index };
        this.change.emit(data);
    }
    onBlur(event, id, emailArray) {
        debugger;
        if (event.target.value !== '') {
            const validEmailRegex = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
            if (!validEmailRegex.test(event.target.value)) {
                this.isError = true;
            }
            else {
                this.isError = false;
                emailArray.map((item, index) => {
                    if (index !== id) {
                        if (item.email === event.target.value) {
                            this.isUniqueError = true;
                        }
                        else {
                            this.isUniqueError = false;
                        }
                    }
                });
            }
        }
        this.blur.emit(event);
    }
    onFocus(event, index) {
        this.focus.emit(event);
    }
    onPlusClick() {
        this.onPlus.emit();
    }
}
EmailComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-email',
                template: "<div class=\"list-view\">\n  <div>\n    <input\n      [id]=\"id\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      type=\"email\"\n      [placeholder]=\"placeholder\"\n      [tabindex]=\"tabindex\"\n      autocomplete=\"off\"\n      [maxLength]=\"maxlength\"\n      [name]=\"name\"\n      [ngClass]=\"{\n        input: true,\n        'form-control': true\n      }\"\n      (focus)=\"onFocus($event, index)\"\n      (blur)=\"onBlur($event, index, emailArray)\"\n      (input)=\"onChange($event, index)\"\n    />\n\n    <span *ngIf=\"isMultiple && value !== ''\" class=\"add-remove\">\n      <span>\n        <fa-icon [icon]=\"faMinus\"></fa-icon>\n      </span>\n      <span *ngIf=\"isShowPlus\">\n        <fa-icon [icon]=\"faPlus\" (click)=\"onPlusClick()\"></fa-icon>\n      </span>\n    </span>\n    <p\n      [ngClass]=\"{\n        control: true,\n        'error-msg': isError\n      }\"\n      *ngIf=\"isError\"\n    >\n      <span>{{ emailFormateError }}</span>\n    </p>\n    <p\n      [ngClass]=\"{\n        control: true,\n        'error-msg': isUniqueError\n      }\"\n      *ngIf=\"isUniqueError\"\n    >\n      <span>{{ duplicateEmailError }}</span>\n    </p>\n  </div>\n</div>\n",
                styles: ["p.control.error-msg{color:red}.add-remove{padding:0 0 0 5px;position:absolute;top:16px}.add-remove span{color:#2c3e50;font-size:12px;font-weight:400;padding:0 0 0 5px}.list-view{margin:auto;position:relative;width:80%}.form-control{border:1px solid #ccc;box-sizing:border-box;display:inline-block;margin:8px 0;padding:12px 20px;width:50%}"]
            },] }
];
EmailComponent.propDecorators = {
    maxlength: [{ type: Input }],
    emailFormateError: [{ type: Input }],
    duplicateEmailError: [{ type: Input }],
    name: [{ type: Input }],
    emailArray: [{ type: Input }],
    id: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    isMultiple: [{ type: Input }],
    placeholder: [{ type: Input }],
    isShowPlus: [{ type: Input }],
    tabindex: [{ type: Input }],
    index: [{ type: Input }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    onPlus: [{ type: Output }]
};

class EmailModule {
}
EmailModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EmailComponent],
                imports: [
                    FontAwesomeModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule
                ],
                exports: [EmailComponent]
            },] }
];

/*
 * Public API Surface of email
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EmailComponent, EmailModule, EmailService };
//# sourceMappingURL=angular-weblineindia-email.js.map

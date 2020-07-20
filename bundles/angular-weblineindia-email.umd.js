(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/angular-fontawesome'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-weblineindia-email', ['exports', '@angular/core', '@fortawesome/free-solid-svg-icons', '@fortawesome/angular-fontawesome', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['angular-weblineindia-email'] = {}, global.ng.core, global.freeSolidSvgIcons, global.angularFontawesome, global.ng.forms, global.ng.common));
}(this, (function (exports, i0, freeSolidSvgIcons, angularFontawesome, forms, common) { 'use strict';

    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        return EmailService;
    }());
    EmailService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmailService_Factory() { return new EmailService(); }, token: EmailService, providedIn: "root" });
    EmailService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    EmailService.ctorParameters = function () { return []; };

    var EmailComponent = /** @class */ (function () {
        function EmailComponent() {
            this.faPlus = freeSolidSvgIcons.faPlus;
            this.faMinus = freeSolidSvgIcons.faMinus;
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
            this.focus = new i0.EventEmitter();
            this.blur = new i0.EventEmitter();
            this.change = new i0.EventEmitter();
            this.onPlus = new i0.EventEmitter();
            this.isError = false;
            this.isUniqueError = false;
        }
        EmailComponent.prototype.onChange = function (event, index) {
            var data = { event: event, index: index };
            this.change.emit(data);
        };
        EmailComponent.prototype.onBlur = function (event, id, emailArray) {
            var _this = this;
            debugger;
            if (event.target.value !== '') {
                var validEmailRegex = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
                if (!validEmailRegex.test(event.target.value)) {
                    this.isError = true;
                }
                else {
                    this.isError = false;
                    emailArray.map(function (item, index) {
                        if (index !== id) {
                            if (item.email === event.target.value) {
                                _this.isUniqueError = true;
                            }
                            else {
                                _this.isUniqueError = false;
                            }
                        }
                    });
                }
            }
            this.blur.emit(event);
        };
        EmailComponent.prototype.onFocus = function (event, index) {
            this.focus.emit(event);
        };
        EmailComponent.prototype.onPlusClick = function () {
            this.onPlus.emit();
        };
        return EmailComponent;
    }());
    EmailComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-email',
                    template: "<div class=\"list-view\">\n  <div>\n    <input\n      [id]=\"id\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      type=\"email\"\n      [placeholder]=\"placeholder\"\n      [tabindex]=\"tabindex\"\n      autocomplete=\"off\"\n      [maxLength]=\"maxlength\"\n      [name]=\"name\"\n      [ngClass]=\"{\n        input: true,\n        'form-control': true\n      }\"\n      (focus)=\"onFocus($event, index)\"\n      (blur)=\"onBlur($event, index, emailArray)\"\n      (input)=\"onChange($event, index)\"\n    />\n\n    <span *ngIf=\"isMultiple && value !== ''\" class=\"add-remove\">\n      <span>\n        <fa-icon [icon]=\"faMinus\"></fa-icon>\n      </span>\n      <span *ngIf=\"isShowPlus\">\n        <fa-icon [icon]=\"faPlus\" (click)=\"onPlusClick()\"></fa-icon>\n      </span>\n    </span>\n    <p\n      [ngClass]=\"{\n        control: true,\n        'error-msg': isError\n      }\"\n      *ngIf=\"isError\"\n    >\n      <span>{{ emailFormateError }}</span>\n    </p>\n    <p\n      [ngClass]=\"{\n        control: true,\n        'error-msg': isUniqueError\n      }\"\n      *ngIf=\"isUniqueError\"\n    >\n      <span>{{ duplicateEmailError }}</span>\n    </p>\n  </div>\n</div>\n",
                    styles: ["p.control.error-msg{color:red}.add-remove{padding:0 0 0 5px;position:absolute;top:16px}.add-remove span{color:#2c3e50;font-size:12px;font-weight:400;padding:0 0 0 5px}.list-view{margin:auto;position:relative;width:80%}.form-control{border:1px solid #ccc;box-sizing:border-box;display:inline-block;margin:8px 0;padding:12px 20px;width:50%}"]
                },] }
    ];
    EmailComponent.propDecorators = {
        maxlength: [{ type: i0.Input }],
        emailFormateError: [{ type: i0.Input }],
        duplicateEmailError: [{ type: i0.Input }],
        name: [{ type: i0.Input }],
        emailArray: [{ type: i0.Input }],
        id: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        isMultiple: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        isShowPlus: [{ type: i0.Input }],
        tabindex: [{ type: i0.Input }],
        index: [{ type: i0.Input }],
        focus: [{ type: i0.Output }],
        blur: [{ type: i0.Output }],
        change: [{ type: i0.Output }],
        onPlus: [{ type: i0.Output }]
    };

    var EmailModule = /** @class */ (function () {
        function EmailModule() {
        }
        return EmailModule;
    }());
    EmailModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EmailComponent],
                    imports: [
                        angularFontawesome.FontAwesomeModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        common.CommonModule
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

    exports.EmailComponent = EmailComponent;
    exports.EmailModule = EmailModule;
    exports.EmailService = EmailService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-weblineindia-email.umd.js.map

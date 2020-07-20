import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@fortawesome/angular-fontawesome';

function EmailComponent_span_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "fa-icon", 7);
    ɵngcc0.ɵɵlistener("click", function EmailComponent_span_3_span_3_Template_fa_icon_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.onPlusClick(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("icon", ctx_r3.faPlus);
} }
function EmailComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵelement(2, "fa-icon", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, EmailComponent_span_3_span_3_Template, 2, 1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r0.faMinus);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isShowPlus);
} }
const _c0 = function (a1) { return { control: true, "error-msg": a1 }; };
function EmailComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 8);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r1.isError));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.emailFormateError);
} }
function EmailComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 8);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r2.isUniqueError));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.duplicateEmailError);
} }
const _c1 = function () { return { input: true, "form-control": true }; };
class EmailService {
    constructor() { }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(); };
EmailService.ɵprov = ɵɵdefineInjectable({ factory: function EmailService_Factory() { return new EmailService(); }, token: EmailService, providedIn: "root" });
EmailService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EmailService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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
EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(); };
EmailComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: EmailComponent, selectors: [["lib-email"]], inputs: { maxlength: "maxlength", emailFormateError: "emailFormateError", duplicateEmailError: "duplicateEmailError", name: "name", id: "id", disabled: "disabled", value: "value", isMultiple: "isMultiple", placeholder: "placeholder", isShowPlus: "isShowPlus", tabindex: "tabindex", index: "index", emailArray: "emailArray" }, outputs: { focus: "focus", blur: "blur", change: "change", onPlus: "onPlus" }, decls: 6, vars: 12, consts: [[1, "list-view"], ["type", "email", "autocomplete", "off", 3, "id", "value", "disabled", "placeholder", "tabindex", "maxLength", "name", "ngClass", "focus", "blur", "input"], ["class", "add-remove", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "add-remove"], [3, "icon"], [4, "ngIf"], [3, "icon", "click"], [3, "ngClass"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "input", 1);
        ɵngcc0.ɵɵlistener("focus", function EmailComponent_Template_input_focus_2_listener($event) { return ctx.onFocus($event, ctx.index); })("blur", function EmailComponent_Template_input_blur_2_listener($event) { return ctx.onBlur($event, ctx.index, ctx.emailArray); })("input", function EmailComponent_Template_input_input_2_listener($event) { return ctx.onChange($event, ctx.index); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, EmailComponent_span_3_Template, 4, 2, "span", 2);
        ɵngcc0.ɵɵtemplate(4, EmailComponent_p_4_Template, 3, 4, "p", 3);
        ɵngcc0.ɵɵtemplate(5, EmailComponent_p_5_Template, 3, 4, "p", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("tabindex", ctx.tabindex)("maxLength", ctx.maxlength)("name", ctx.name)("ngClass", ɵngcc0.ɵɵpureFunction0(11, _c1));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isMultiple && ctx.value !== "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isError);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isUniqueError);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc2.FaIconComponent], styles: ["p.control.error-msg[_ngcontent-%COMP%]{color:red}.add-remove[_ngcontent-%COMP%]{padding:0 0 0 5px;position:absolute;top:16px}.add-remove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2c3e50;font-size:12px;font-weight:400;padding:0 0 0 5px}.list-view[_ngcontent-%COMP%]{margin:auto;position:relative;width:80%}.form-control[_ngcontent-%COMP%]{border:1px solid #ccc;box-sizing:border-box;display:inline-block;margin:8px 0;padding:12px 20px;width:50%}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EmailComponent, [{
        type: Component,
        args: [{
                selector: 'lib-email',
                template: "<div class=\"list-view\">\n  <div>\n    <input\n      [id]=\"id\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      type=\"email\"\n      [placeholder]=\"placeholder\"\n      [tabindex]=\"tabindex\"\n      autocomplete=\"off\"\n      [maxLength]=\"maxlength\"\n      [name]=\"name\"\n      [ngClass]=\"{\n        input: true,\n        'form-control': true\n      }\"\n      (focus)=\"onFocus($event, index)\"\n      (blur)=\"onBlur($event, index, emailArray)\"\n      (input)=\"onChange($event, index)\"\n    />\n\n    <span *ngIf=\"isMultiple && value !== ''\" class=\"add-remove\">\n      <span>\n        <fa-icon [icon]=\"faMinus\"></fa-icon>\n      </span>\n      <span *ngIf=\"isShowPlus\">\n        <fa-icon [icon]=\"faPlus\" (click)=\"onPlusClick()\"></fa-icon>\n      </span>\n    </span>\n    <p\n      [ngClass]=\"{\n        control: true,\n        'error-msg': isError\n      }\"\n      *ngIf=\"isError\"\n    >\n      <span>{{ emailFormateError }}</span>\n    </p>\n    <p\n      [ngClass]=\"{\n        control: true,\n        'error-msg': isUniqueError\n      }\"\n      *ngIf=\"isUniqueError\"\n    >\n      <span>{{ duplicateEmailError }}</span>\n    </p>\n  </div>\n</div>\n",
                styles: ["p.control.error-msg{color:red}.add-remove{padding:0 0 0 5px;position:absolute;top:16px}.add-remove span{color:#2c3e50;font-size:12px;font-weight:400;padding:0 0 0 5px}.list-view{margin:auto;position:relative;width:80%}.form-control{border:1px solid #ccc;box-sizing:border-box;display:inline-block;margin:8px 0;padding:12px 20px;width:50%}"]
            }]
    }], function () { return []; }, { maxlength: [{
            type: Input
        }], emailFormateError: [{
            type: Input
        }], duplicateEmailError: [{
            type: Input
        }], name: [{
            type: Input
        }], id: [{
            type: Input
        }], disabled: [{
            type: Input
        }], value: [{
            type: Input
        }], isMultiple: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], isShowPlus: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], index: [{
            type: Input
        }], focus: [{
            type: Output
        }], blur: [{
            type: Output
        }], change: [{
            type: Output
        }], onPlus: [{
            type: Output
        }], emailArray: [{
            type: Input
        }] }); })();

class EmailModule {
}
EmailModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: EmailModule });
EmailModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function EmailModule_Factory(t) { return new (t || EmailModule)(); }, imports: [[
            FontAwesomeModule,
            FormsModule,
            ReactiveFormsModule,
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(EmailModule, { declarations: function () { return [EmailComponent]; }, imports: function () { return [FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule]; }, exports: function () { return [EmailComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EmailModule, [{
        type: NgModule,
        args: [{
                declarations: [EmailComponent],
                imports: [
                    FontAwesomeModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule
                ],
                exports: [EmailComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of email
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EmailComponent, EmailModule, EmailService };

//# sourceMappingURL=angular-weblineindia-email.js.map
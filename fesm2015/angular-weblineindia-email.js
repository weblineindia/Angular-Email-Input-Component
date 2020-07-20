import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵadvance, ɵɵproperty, ɵɵelement, ɵɵtemplate, ɵɵtext, ɵɵpureFunction1, ɵɵtextInterpolate, EventEmitter, ɵɵdefineComponent, ɵɵpureFunction0, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { NgClass, NgIf, CommonModule } from '@angular/common';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class EmailService {
    constructor() { }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(); };
EmailService.ɵprov = ɵɵdefineInjectable({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EmailService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function EmailComponent_span_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "fa-icon", 7);
    ɵɵlistener("click", function EmailComponent_span_3_span_3_Template_fa_icon_click_1_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(2); return ctx_r4.onPlusClick(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("icon", ctx_r3.faPlus);
} }
function EmailComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵelementStart(1, "span");
    ɵɵelement(2, "fa-icon", 5);
    ɵɵelementEnd();
    ɵɵtemplate(3, EmailComponent_span_3_span_3_Template, 2, 1, "span", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("icon", ctx_r0.faMinus);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isShowPlus);
} }
const _c0 = function (a1) { return { control: true, "error-msg": a1 }; };
function EmailComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p", 8);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c0, ctx_r1.isError));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.emailFormateError);
} }
function EmailComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p", 8);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c0, ctx_r2.isUniqueError));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.duplicateEmailError);
} }
const _c1 = function () { return { input: true, "form-control": true }; };
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
EmailComponent.ɵcmp = ɵɵdefineComponent({ type: EmailComponent, selectors: [["lib-email"]], inputs: { maxlength: "maxlength", emailFormateError: "emailFormateError", duplicateEmailError: "duplicateEmailError", name: "name", emailArray: "emailArray", id: "id", disabled: "disabled", value: "value", isMultiple: "isMultiple", placeholder: "placeholder", isShowPlus: "isShowPlus", tabindex: "tabindex", index: "index" }, outputs: { focus: "focus", blur: "blur", change: "change", onPlus: "onPlus" }, decls: 6, vars: 12, consts: [[1, "list-view"], ["type", "email", "autocomplete", "off", 3, "id", "value", "disabled", "placeholder", "tabindex", "maxLength", "name", "ngClass", "focus", "blur", "input"], ["class", "add-remove", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "add-remove"], [3, "icon"], [4, "ngIf"], [3, "icon", "click"], [3, "ngClass"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div");
        ɵɵelementStart(2, "input", 1);
        ɵɵlistener("focus", function EmailComponent_Template_input_focus_2_listener($event) { return ctx.onFocus($event, ctx.index); })("blur", function EmailComponent_Template_input_blur_2_listener($event) { return ctx.onBlur($event, ctx.index, ctx.emailArray); })("input", function EmailComponent_Template_input_input_2_listener($event) { return ctx.onChange($event, ctx.index); });
        ɵɵelementEnd();
        ɵɵtemplate(3, EmailComponent_span_3_Template, 4, 2, "span", 2);
        ɵɵtemplate(4, EmailComponent_p_4_Template, 3, 4, "p", 3);
        ɵɵtemplate(5, EmailComponent_p_5_Template, 3, 4, "p", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("id", ctx.id)("value", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("tabindex", ctx.tabindex)("maxLength", ctx.maxlength)("name", ctx.name)("ngClass", ɵɵpureFunction0(11, _c1));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isMultiple && ctx.value !== "");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isError);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isUniqueError);
    } }, directives: [NgClass, NgIf, FaIconComponent], styles: ["p.control.error-msg[_ngcontent-%COMP%]{color:red}.add-remove[_ngcontent-%COMP%]{padding:0 0 0 5px;position:absolute;top:16px}.add-remove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2c3e50;font-size:12px;font-weight:400;padding:0 0 0 5px}.list-view[_ngcontent-%COMP%]{margin:auto;position:relative;width:80%}.form-control[_ngcontent-%COMP%]{border:1px solid #ccc;box-sizing:border-box;display:inline-block;margin:8px 0;padding:12px 20px;width:50%}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EmailComponent, [{
        type: Component,
        args: [{
                selector: 'lib-email',
                templateUrl: './email.component.html',
                styleUrls: ['./email.component.css']
            }]
    }], null, { maxlength: [{
            type: Input
        }], emailFormateError: [{
            type: Input
        }], duplicateEmailError: [{
            type: Input
        }], name: [{
            type: Input
        }], emailArray: [{
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
        }] }); })();

class EmailModule {
}
EmailModule.ɵmod = ɵɵdefineNgModule({ type: EmailModule });
EmailModule.ɵinj = ɵɵdefineInjector({ factory: function EmailModule_Factory(t) { return new (t || EmailModule)(); }, imports: [[
            FontAwesomeModule,
            FormsModule,
            ReactiveFormsModule,
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EmailModule, { declarations: [EmailComponent], imports: [FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule], exports: [EmailComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(EmailModule, [{
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

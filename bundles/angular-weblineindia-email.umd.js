(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fortawesome/free-solid-svg-icons'), require('@angular/common'), require('@fortawesome/angular-fontawesome'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('angular-weblineindia-email', ['exports', '@angular/core', '@fortawesome/free-solid-svg-icons', '@angular/common', '@fortawesome/angular-fontawesome', '@angular/forms'], factory) :
    (global = global || self, factory(global['angular-weblineindia-email'] = {}, global.ng.core, global.freeSolidSvgIcons, global.ng.common, global.i2, global.ng.forms));
}(this, (function (exports, i0, freeSolidSvgIcons, i1, i2, forms) { 'use strict';

    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        return EmailService;
    }());
    EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(); };
    EmailService.ɵprov = i0.ɵɵdefineInjectable({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EmailService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    function EmailComponent_span_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "fa-icon", 7);
            i0.ɵɵlistener("click", function EmailComponent_span_3_span_3_Template_fa_icon_click_1_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onPlusClick(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("icon", ctx_r3.faPlus);
        }
    }
    function EmailComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 4);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵelement(2, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, EmailComponent_span_3_span_3_Template, 2, 1, "span", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx_r0.faMinus);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.isShowPlus);
        }
    }
    var _c0 = function (a1) { return { control: true, "error-msg": a1 }; };
    function EmailComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p", 8);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r1.isError));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r1.emailFormateError);
        }
    }
    function EmailComponent_p_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p", 8);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r2.isUniqueError));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r2.duplicateEmailError);
        }
    }
    var _c1 = function () { return { input: true, "form-control": true }; };
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
    EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(); };
    EmailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailComponent, selectors: [["lib-email"]], inputs: { maxlength: "maxlength", emailFormateError: "emailFormateError", duplicateEmailError: "duplicateEmailError", name: "name", emailArray: "emailArray", id: "id", disabled: "disabled", value: "value", isMultiple: "isMultiple", placeholder: "placeholder", isShowPlus: "isShowPlus", tabindex: "tabindex", index: "index" }, outputs: { focus: "focus", blur: "blur", change: "change", onPlus: "onPlus" }, decls: 6, vars: 12, consts: [[1, "list-view"], ["type", "email", "autocomplete", "off", 3, "id", "value", "disabled", "placeholder", "tabindex", "maxLength", "name", "ngClass", "focus", "blur", "input"], ["class", "add-remove", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "add-remove"], [3, "icon"], [4, "ngIf"], [3, "icon", "click"], [3, "ngClass"]], template: function EmailComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div");
                i0.ɵɵelementStart(2, "input", 1);
                i0.ɵɵlistener("focus", function EmailComponent_Template_input_focus_2_listener($event) { return ctx.onFocus($event, ctx.index); })("blur", function EmailComponent_Template_input_blur_2_listener($event) { return ctx.onBlur($event, ctx.index, ctx.emailArray); })("input", function EmailComponent_Template_input_input_2_listener($event) { return ctx.onChange($event, ctx.index); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, EmailComponent_span_3_Template, 4, 2, "span", 2);
                i0.ɵɵtemplate(4, EmailComponent_p_4_Template, 3, 4, "p", 3);
                i0.ɵɵtemplate(5, EmailComponent_p_5_Template, 3, 4, "p", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("id", ctx.id)("value", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("tabindex", ctx.tabindex)("maxLength", ctx.maxlength)("name", ctx.name)("ngClass", i0.ɵɵpureFunction0(11, _c1));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isMultiple && ctx.value !== "");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isError);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isUniqueError);
            }
        }, directives: [i1.NgClass, i1.NgIf, i2.FaIconComponent], styles: ["p.control.error-msg[_ngcontent-%COMP%]{color:red}.add-remove[_ngcontent-%COMP%]{padding:0 0 0 5px;position:absolute;top:16px}.add-remove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2c3e50;font-size:12px;font-weight:400;padding:0 0 0 5px}.list-view[_ngcontent-%COMP%]{margin:auto;position:relative;width:80%}.form-control[_ngcontent-%COMP%]{border:1px solid #ccc;box-sizing:border-box;display:inline-block;margin:8px 0;padding:12px 20px;width:50%}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EmailComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-email',
                        templateUrl: './email.component.html',
                        styleUrls: ['./email.component.css']
                    }]
            }], null, { maxlength: [{
                    type: i0.Input
                }], emailFormateError: [{
                    type: i0.Input
                }], duplicateEmailError: [{
                    type: i0.Input
                }], name: [{
                    type: i0.Input
                }], emailArray: [{
                    type: i0.Input
                }], id: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], isMultiple: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], isShowPlus: [{
                    type: i0.Input
                }], tabindex: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }], focus: [{
                    type: i0.Output
                }], blur: [{
                    type: i0.Output
                }], change: [{
                    type: i0.Output
                }], onPlus: [{
                    type: i0.Output
                }] });
    })();

    var EmailModule = /** @class */ (function () {
        function EmailModule() {
        }
        return EmailModule;
    }());
    EmailModule.ɵmod = i0.ɵɵdefineNgModule({ type: EmailModule });
    EmailModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EmailModule_Factory(t) { return new (t || EmailModule)(); }, imports: [[
                i2.FontAwesomeModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EmailModule, { declarations: [EmailComponent], imports: [i2.FontAwesomeModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i1.CommonModule], exports: [EmailComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EmailModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [EmailComponent],
                        imports: [
                            i2.FontAwesomeModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1.CommonModule
                        ],
                        exports: [EmailComponent]
                    }]
            }], null, null);
    })();

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

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
function EmailComponent_span_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "fa-icon", 7);
    i0.ɵɵlistener("click", function EmailComponent_span_3_span_3_Template_fa_icon_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onPlusClick(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r3.faPlus);
} }
function EmailComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "fa-icon", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, EmailComponent_span_3_span_3_Template, 2, 1, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r0.faMinus);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isShowPlus);
} }
const _c0 = function (a1) { return { control: true, "error-msg": a1 }; };
function EmailComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r1.isError));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.emailFormateError);
} }
function EmailComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r2.isUniqueError));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.duplicateEmailError);
} }
const _c1 = function () { return { input: true, "form-control": true }; };
export class EmailComponent {
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
EmailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailComponent, selectors: [["lib-email"]], inputs: { maxlength: "maxlength", emailFormateError: "emailFormateError", duplicateEmailError: "duplicateEmailError", name: "name", emailArray: "emailArray", id: "id", disabled: "disabled", value: "value", isMultiple: "isMultiple", placeholder: "placeholder", isShowPlus: "isShowPlus", tabindex: "tabindex", index: "index" }, outputs: { focus: "focus", blur: "blur", change: "change", onPlus: "onPlus" }, decls: 6, vars: 12, consts: [[1, "list-view"], ["type", "email", "autocomplete", "off", 3, "id", "value", "disabled", "placeholder", "tabindex", "maxLength", "name", "ngClass", "focus", "blur", "input"], ["class", "add-remove", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "add-remove"], [3, "icon"], [4, "ngIf"], [3, "icon", "click"], [3, "ngClass"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("id", ctx.id)("value", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("tabindex", ctx.tabindex)("maxLength", ctx.maxlength)("name", ctx.name)("ngClass", i0.ɵɵpureFunction0(11, _c1));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isMultiple && ctx.value !== "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isError);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isUniqueError);
    } }, directives: [i1.NgClass, i1.NgIf, i2.FaIconComponent], styles: ["p.control.error-msg[_ngcontent-%COMP%]{color:red}.add-remove[_ngcontent-%COMP%]{padding:0 0 0 5px;position:absolute;top:16px}.add-remove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2c3e50;font-size:12px;font-weight:400;padding:0 0 0 5px}.list-view[_ngcontent-%COMP%]{margin:auto;position:relative;width:80%}.form-control[_ngcontent-%COMP%]{border:1px solid #ccc;box-sizing:border-box;display:inline-block;margin:8px 0;padding:12px 20px;width:50%}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmailComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZW1haWwvc3JjL2xpYi9lbWFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbWFpbC9zcmMvbGliL2VtYWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0lDd0I5RCw0QkFDRTtJQUFBLGtDQUEyRDtJQUFsQyw2TEFBdUI7SUFBQyxpQkFBVTtJQUM3RCxpQkFBTzs7O0lBREksZUFBZTtJQUFmLG9DQUFlOzs7SUFMNUIsK0JBQ0U7SUFBQSw0QkFDRTtJQUFBLDZCQUFvQztJQUN0QyxpQkFBTztJQUNQLHdFQUNFO0lBRUosaUJBQU87OztJQUxNLGVBQWdCO0lBQWhCLHFDQUFnQjtJQUVyQixlQUFrQjtJQUFsQix3Q0FBa0I7Ozs7SUFJMUIsNEJBT0U7SUFBQSw0QkFBTTtJQUFBLFlBQXVCO0lBQUEsaUJBQU87SUFDdEMsaUJBQUk7OztJQVBGLG9FQUdFO0lBR0ksZUFBdUI7SUFBdkIsOENBQXVCOzs7SUFFL0IsNEJBT0U7SUFBQSw0QkFBTTtJQUFBLFlBQXlCO0lBQUEsaUJBQU87SUFDeEMsaUJBQUk7OztJQVBGLDBFQUdFO0lBR0ksZUFBeUI7SUFBekIsZ0RBQXlCOzs7QUR0Q3JDLE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBTUUsV0FBTSxHQUFRLE1BQU0sQ0FBQztRQUNyQixZQUFPLEdBQVEsT0FBTyxDQUFDO1FBRWQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBVyxvQkFBb0IsQ0FBQztRQUNqRCx3QkFBbUIsR0FBVyx5QkFBeUIsQ0FBQztR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LFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOztrQkFLRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhUGx1cywgZmFNaW51cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZW1haWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW1haWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lbWFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb25lbnQge1xuICBmYVBsdXM6IGFueSA9IGZhUGx1cztcbiAgZmFNaW51czogYW55ID0gZmFNaW51cztcblxuICBASW5wdXQoKSBtYXhsZW5ndGg6IE51bWJlciA9IDUwO1xuICBASW5wdXQoKSBlbWFpbEZvcm1hdGVFcnJvcjogU3RyaW5nID0gJ0VtYWlsIGlzIG5vdCB2YWxpZCc7XG4gIEBJbnB1dCgpIGR1cGxpY2F0ZUVtYWlsRXJyb3I6IFN0cmluZyA9ICdEbyBub3QgZW50ZXIgc2FtZSBlbWFpbCc7XG4gIEBJbnB1dCgpIG5hbWU6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBlbWFpbEFycmF5OiBhbnk7XG4gIEBJbnB1dCgpIGlkOiBTdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdmFsdWU6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpc011bHRpcGxlOiBCb29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IFN0cmluZyA9ICdFbWFpbCc7XG4gIEBJbnB1dCgpIGlzU2hvd1BsdXM6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiaW5kZXg6IE51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGluZGV4OiBOdW1iZXIgPSAwO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25QbHVzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uQ2hhbmdlKGV2ZW50LCBpbmRleCkge1xuICAgIGxldCBkYXRhID0geyBldmVudDogZXZlbnQsIGluZGV4OiBpbmRleCB9O1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZGF0YSk7XG4gIH1cblxuICBpc0Vycm9yOiBCb29sZWFuID0gZmFsc2U7XG4gIGlzVW5pcXVlRXJyb3I6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBvbkJsdXIoZXZlbnQsIGlkLCBlbWFpbEFycmF5KSB7XG4gICAgZGVidWdnZXI7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IHZhbGlkRW1haWxSZWdleCA9IC9bQS1aMC05YS16Ll8lKy1dK0BbQS1aYS16MC05Li1dK1xcLltBLVphLXpdezIsfS87XG4gICAgICBpZiAoIXZhbGlkRW1haWxSZWdleC50ZXN0KGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgICAgICBlbWFpbEFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IGlkKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5lbWFpbCA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNVbmlxdWVFcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmlzVW5pcXVlRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cbiAgb25Gb2N1cyhldmVudCwgaW5kZXgpIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uUGx1c0NsaWNrKCkge1xuICAgIHRoaXMub25QbHVzLmVtaXQoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImxpc3Qtdmlld1wiPlxuICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbdGFiaW5kZXhdPVwidGFiaW5kZXhcIlxuICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgIFttYXhMZW5ndGhdPVwibWF4bGVuZ3RoXCJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICBpbnB1dDogdHJ1ZSxcbiAgICAgICAgJ2Zvcm0tY29udHJvbCc6IHRydWVcbiAgICAgIH1cIlxuICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50LCBpbmRleClcIlxuICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudCwgaW5kZXgsIGVtYWlsQXJyYXkpXCJcbiAgICAgIChpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQsIGluZGV4KVwiXG4gICAgLz5cblxuICAgIDxzcGFuICpuZ0lmPVwiaXNNdWx0aXBsZSAmJiB2YWx1ZSAhPT0gJydcIiBjbGFzcz1cImFkZC1yZW1vdmVcIj5cbiAgICAgIDxzcGFuPlxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYU1pbnVzXCI+PC9mYS1pY29uPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCJpc1Nob3dQbHVzXCI+XG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUGx1c1wiIChjbGljayk9XCJvblBsdXNDbGljaygpXCI+PC9mYS1pY29uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8cFxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICBjb250cm9sOiB0cnVlLFxuICAgICAgICAnZXJyb3ItbXNnJzogaXNFcnJvclxuICAgICAgfVwiXG4gICAgICAqbmdJZj1cImlzRXJyb3JcIlxuICAgID5cbiAgICAgIDxzcGFuPnt7IGVtYWlsRm9ybWF0ZUVycm9yIH19PC9zcGFuPlxuICAgIDwvcD5cbiAgICA8cFxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICBjb250cm9sOiB0cnVlLFxuICAgICAgICAnZXJyb3ItbXNnJzogaXNVbmlxdWVFcnJvclxuICAgICAgfVwiXG4gICAgICAqbmdJZj1cImlzVW5pcXVlRXJyb3JcIlxuICAgID5cbiAgICAgIDxzcGFuPnt7IGR1cGxpY2F0ZUVtYWlsRXJyb3IgfX08L3NwYW4+XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19
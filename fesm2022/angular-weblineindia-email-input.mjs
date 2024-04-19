import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class AngularWeblineindiaEmailInputService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AngularWeblineindiaEmailInputComponent {
    constructor() {
        this.disabled = false;
        this.required = false;
        this.isInvalidEmail = false;
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.KeyPress = new EventEmitter();
        this.KeyDown = new EventEmitter();
        this.KeyUp = new EventEmitter();
    }
    onFocus(event) {
        this.focus.emit(event);
    }
    onBlur(event) {
        this.blur.emit(event);
    }
    onKeyPress(event) {
        this.KeyPress.emit(event);
    }
    onKeyDown(event) {
        this.KeyDown.emit(event);
    }
    onKeyUp(event) {
        this.KeyUp.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AngularWeblineindiaEmailInputComponent, selector: "angular-weblineindia-email", inputs: { placeholder: "placeholder", disabled: "disabled", value: "value", required: "required", isInvalidEmail: "isInvalidEmail", invalidMessage: "invalidMessage", class: "class", errorClass: "errorClass" }, outputs: { focus: "focus", blur: "blur", KeyPress: "KeyPress", KeyDown: "KeyDown", KeyUp: "KeyUp" }, ngImport: i0, template: "<div>\r\n  <input\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [(ngModel)]=\"value\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n    (keypress)=\"onKeyPress($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event)\"\r\n    #emailInput=\"ngModel\"\r\n    name=\"email\"\r\n  />\r\n\r\n  <div *ngIf=\"isInvalidEmail\" [class]=\"errorClass\">\r\n    {{ invalidMessage }}\r\n  </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'angular-weblineindia-email', template: "<div>\r\n  <input\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [(ngModel)]=\"value\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n    (keypress)=\"onKeyPress($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event)\"\r\n    #emailInput=\"ngModel\"\r\n    name=\"email\"\r\n  />\r\n\r\n  <div *ngIf=\"isInvalidEmail\" [class]=\"errorClass\">\r\n    {{ invalidMessage }}\r\n  </div>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], value: [{
                type: Input
            }], required: [{
                type: Input
            }], isInvalidEmail: [{
                type: Input
            }], invalidMessage: [{
                type: Input
            }], class: [{
                type: Input
            }], errorClass: [{
                type: Input
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], KeyPress: [{
                type: Output
            }], KeyDown: [{
                type: Output
            }], KeyUp: [{
                type: Output
            }] } });

class AngularWeblineindiaEmailInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputModule, declarations: [AngularWeblineindiaEmailInputComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [AngularWeblineindiaEmailInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputModule, imports: [CommonModule, FormsModule, ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaEmailInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularWeblineindiaEmailInputComponent
                    ],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule
                    ],
                    exports: [
                        AngularWeblineindiaEmailInputComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-weblineindia-email-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularWeblineindiaEmailInputComponent, AngularWeblineindiaEmailInputModule, AngularWeblineindiaEmailInputService };
//# sourceMappingURL=angular-weblineindia-email-input.mjs.map

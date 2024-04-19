import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class AngularWeblineindiaEmailInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtZW1haWwtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13ZWJsaW5laW5kaWEtZW1haWwtaW5wdXQvc3JjL2xpYi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1lbWFpbC1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdlYmxpbmVpbmRpYS1lbWFpbC1pbnB1dC9zcmMvbGliL2FuZ3VsYXItd2VibGluZWluZGlhLWVtYWlsLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPdkUsTUFBTSxPQUFPLHNDQUFzQztJQW1CakQ7UUFqQlMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBSy9CLFVBQUssR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNyRCxTQUFJLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDcEQsYUFBUSxHQUNoQixJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUMxQixZQUFPLEdBQ2YsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUIsVUFBSyxHQUNiLElBQUksWUFBWSxFQUFpQixDQUFDO0lBRXJCLENBQUM7SUFFaEIsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBb0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzsrR0F2Q1Usc0NBQXNDO21HQUF0QyxzQ0FBc0MseVhDUG5ELHFoQkFvQkE7OzRGRGJhLHNDQUFzQztrQkFMbEQsU0FBUzsrQkFDRSw0QkFBNEI7MEVBSzdCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBRUksS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUVHLE9BQU87c0JBQWhCLE1BQU07Z0JBRUcsS0FBSztzQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci13ZWJsaW5laW5kaWEtZW1haWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1lbWFpbC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYW5ndWxhci13ZWJsaW5laW5kaWEtZW1haWwtaW5wdXQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcldlYmxpbmVpbmRpYUVtYWlsSW5wdXRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsdWUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc0ludmFsaWRFbWFpbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGludmFsaWRNZXNzYWdlITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsYXNzITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVycm9yQ2xhc3MhOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIEtleVByZXNzOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBLZXlEb3duOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBLZXlVcDogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+ID1cclxuICAgIG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5LZXlQcmVzcy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5LZXlEb3duLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5LZXlVcC5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdj5cclxuICA8aW5wdXRcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgW2NsYXNzXT1cImNsYXNzXCJcclxuICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gICAgKGtleXByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50KVwiXHJcbiAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCJcclxuICAgICNlbWFpbElucHV0PVwibmdNb2RlbFwiXHJcbiAgICBuYW1lPVwiZW1haWxcIlxyXG4gIC8+XHJcblxyXG4gIDxkaXYgKm5nSWY9XCJpc0ludmFsaWRFbWFpbFwiIFtjbGFzc109XCJlcnJvckNsYXNzXCI+XHJcbiAgICB7eyBpbnZhbGlkTWVzc2FnZSB9fVxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19
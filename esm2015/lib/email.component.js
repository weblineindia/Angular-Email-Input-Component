import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZW1haWwvc3JjL2xpYi9lbWFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTXBFLE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBTUUsV0FBTSxHQUFRLE1BQU0sQ0FBQztRQUNyQixZQUFPLEdBQVEsT0FBTyxDQUFDO1FBRWQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBVyxvQkFBb0IsQ0FBQztRQUNqRCx3QkFBbUIsR0FBVyx5QkFBeUIsQ0FBQztRQUN4RCxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFDOUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25ELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBTzlELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUE2QmpDLENBQUM7SUFuQ0MsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ25CLElBQUksSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUtELE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQVU7UUFDMUIsUUFBUSxDQUFDO1FBQ1QsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxlQUFlLEdBQUcsZ0RBQWdELENBQUM7WUFDekUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQzdCLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTt3QkFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFOzRCQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt5QkFDM0I7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7eUJBQzVCO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQTdERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLCtyQ0FBcUM7O2FBRXRDOzs7d0JBS0UsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2lCQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxNQUFNO21CQUNOLE1BQU07cUJBQ04sTUFBTTtxQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhUGx1cywgZmFNaW51cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZW1haWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW1haWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lbWFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb25lbnQge1xuICBmYVBsdXM6IGFueSA9IGZhUGx1cztcbiAgZmFNaW51czogYW55ID0gZmFNaW51cztcblxuICBASW5wdXQoKSBtYXhsZW5ndGg6IE51bWJlciA9IDUwO1xuICBASW5wdXQoKSBlbWFpbEZvcm1hdGVFcnJvcjogU3RyaW5nID0gJ0VtYWlsIGlzIG5vdCB2YWxpZCc7XG4gIEBJbnB1dCgpIGR1cGxpY2F0ZUVtYWlsRXJyb3I6IFN0cmluZyA9ICdEbyBub3QgZW50ZXIgc2FtZSBlbWFpbCc7XG4gIEBJbnB1dCgpIG5hbWU6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBlbWFpbEFycmF5OiBhbnk7XG4gIEBJbnB1dCgpIGlkOiBTdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdmFsdWU6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpc011bHRpcGxlOiBCb29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IFN0cmluZyA9ICdFbWFpbCc7XG4gIEBJbnB1dCgpIGlzU2hvd1BsdXM6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiaW5kZXg6IE51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGluZGV4OiBOdW1iZXIgPSAwO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25QbHVzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uQ2hhbmdlKGV2ZW50LCBpbmRleCkge1xuICAgIGxldCBkYXRhID0geyBldmVudDogZXZlbnQsIGluZGV4OiBpbmRleCB9O1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZGF0YSk7XG4gIH1cblxuICBpc0Vycm9yOiBCb29sZWFuID0gZmFsc2U7XG4gIGlzVW5pcXVlRXJyb3I6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBvbkJsdXIoZXZlbnQsIGlkLCBlbWFpbEFycmF5KSB7XG4gICAgZGVidWdnZXI7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IHZhbGlkRW1haWxSZWdleCA9IC9bQS1aMC05YS16Ll8lKy1dK0BbQS1aYS16MC05Li1dK1xcLltBLVphLXpdezIsfS87XG4gICAgICBpZiAoIXZhbGlkRW1haWxSZWdleC50ZXN0KGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgICAgICBlbWFpbEFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IGlkKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5lbWFpbCA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNVbmlxdWVFcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmlzVW5pcXVlRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cbiAgb25Gb2N1cyhldmVudCwgaW5kZXgpIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uUGx1c0NsaWNrKCkge1xuICAgIHRoaXMub25QbHVzLmVtaXQoKTtcbiAgfVxufVxuIl19
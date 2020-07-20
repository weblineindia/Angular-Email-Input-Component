import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class EmailComponent {
    faPlus: any;
    faMinus: any;
    maxlength: Number;
    emailFormateError: String;
    duplicateEmailError: String;
    name: String;
    emailArray: any;
    id: String;
    disabled: Boolean;
    value: String;
    isMultiple: Boolean;
    placeholder: String;
    isShowPlus: Boolean;
    tabindex: Number;
    index: Number;
    focus: EventEmitter<any>;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    onPlus: EventEmitter<any>;
    onChange(event: any, index: any): void;
    isError: Boolean;
    isUniqueError: Boolean;
    onBlur(event: any, id: any, emailArray: any): void;
    onFocus(event: any, index: any): void;
    onPlusClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EmailComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<EmailComponent, "lib-email", never, { "maxlength": "maxlength"; "emailFormateError": "emailFormateError"; "duplicateEmailError": "duplicateEmailError"; "name": "name"; "id": "id"; "disabled": "disabled"; "value": "value"; "isMultiple": "isMultiple"; "placeholder": "placeholder"; "isShowPlus": "isShowPlus"; "tabindex": "tabindex"; "index": "index"; "emailArray": "emailArray"; }, { "focus": "focus"; "blur": "blur"; "change": "change"; "onPlus": "onPlus"; }, never, never>;
}

//# sourceMappingURL=email.component.d.ts.map
import { EventEmitter } from '@angular/core';
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
}

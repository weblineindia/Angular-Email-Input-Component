import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AngularWeblineindiaEmailInputComponent {
    placeholder: string;
    disabled: boolean;
    value: string;
    required: boolean;
    isInvalidEmail: boolean;
    invalidMessage: string;
    class: string;
    errorClass: string;
    focus: EventEmitter<void>;
    blur: EventEmitter<void>;
    KeyPress: EventEmitter<KeyboardEvent>;
    KeyDown: EventEmitter<KeyboardEvent>;
    KeyUp: EventEmitter<KeyboardEvent>;
    constructor();
    onFocus(event: any): void;
    onBlur(event: any): void;
    onKeyPress(event: KeyboardEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularWeblineindiaEmailInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularWeblineindiaEmailInputComponent, "angular-weblineindia-email", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; "required": { "alias": "required"; "required": false; }; "isInvalidEmail": { "alias": "isInvalidEmail"; "required": false; }; "invalidMessage": { "alias": "invalidMessage"; "required": false; }; "class": { "alias": "class"; "required": false; }; "errorClass": { "alias": "errorClass"; "required": false; }; }, { "focus": "focus"; "blur": "blur"; "KeyPress": "KeyPress"; "KeyDown": "KeyDown"; "KeyUp": "KeyUp"; }, never, never, false, never>;
}

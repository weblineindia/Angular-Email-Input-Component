# Angular - Email Component

A Angular based Email component used to specify an input field where the user can enter data.

## Table of contents

- [Browser Support](#browser-support)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Available Props](#available-props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#Keywords)

## Browser Support
| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 83.0 ✔                                                                                   | 77.0 ✔                                                                                      | 13.1.1 ✔                                                                                 | 83.0 ✔                                                                             | 11.9 ✔                                                                                                                       |


## Demo

[![](textNg.gif)](https://github.com/weblineindia/AngularJS-Email/textNg.gif)

## Getting started

Install the npm package:

```bash
npm install angular-weblineindia-email
#OR
yarn add angular-weblineindia-email
```

## Usage

Use the `<angular-weblineindia-email>` component:

Add in app.module.ts file

```typescript
import { NgModule } from "@angular/core";
import { AngularWeblineindiaEmailInputModule } from "angular-weblineindia-email";

@NgModule({
  imports: [AngularWeblineindiaEmailInputModule],
})
export class AppModule {}
```

Add in app.component.ts file

```typescript
export class AppComponent {
  isInvalidEmail: boolean = false;
  invalidMessage: string = "";

  onFocus(event: any) {}

  onBlur(event: any) {}

  onKeyPressHandler(event: any) {}

  onKeyDownHandler(event: any): void {}

  onKeyUpHandler(event: any): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(event?.target?.value);

    if (!isValid) {
      this.isInvalidEmail = true;
      this.invalidMessage = "Invalid email format";
    } else {
      this.isInvalidEmail = false;
      this.invalidMessage = "";
    }
  }
}
```

Add in app.component.html file

```html
<angular-weblineindia-email [placeholder]="'Enter your email'" [disabled]="false" [value]="'yourname@domain.com'" [required]="true" [isInvalidEmail]="isInvalidEmail" [invalidMessage]="invalidMessage" [class]="'emailInput'" [errorClass]="'errorMessage'" (focus)="onFocus($event)" (blur)="onBlur($event)" (KeyPress)="onKeyPressHandler($event)" (KeyDown)="onKeyDownHandler($event)" (KeyUp)="onKeyUpHandler($event)"> </angular-weblineindia-email>
```

Add in app.component.css file

```typescript
::ng-deep .emailInput {
  /* Add your custom styles here */
}

::ng-deep .errorMessage {
  /* Add your custom styles here */
}

```

## Available Props

| Prop           | Type    | Default | Description                                                   |
| -------------- | ------- | ------- | ------------------------------------------------------------- |
| placeholder    | String  |         | The placeholder text displayed in the input field.            |
| disabled       | Boolean | false   | If true, disables the input field.                            |
| required       | Boolean | false   | If true, makes the input field mandatory.                     |
| isInvalidEmail | Boolean | false   | If true, adds a styling to indicate an invalid email format.  |
| invalidMessage | String  |         | The error message displayed when the email format is invalid. |
| class          | String  |         | Additional CSS class(es) to apply to the input field.         |
| errorClass     | String  |         | CSS class applied when the email format is invalid.           |

## Methods

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| focus    | Gets triggered when the autocomplete input field receives focus. |
| blur     | Gets triggered when the autocomplete input field loses focus.    |
| KeyPress | Gets triggered when a key gets pressed.                          |
| KeyDown  | Gets triggered when a key gets down.                             |
| KeyUp    | Gets triggered when a key gets up.                               |

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

---

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html)

---

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/AngularJS-Text-Box/blob/master/LICENSE

## Keywords

angular-weblineindia-email, email, input, angular, angular-component, email-input-component

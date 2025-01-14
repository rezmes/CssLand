// // import { override } from '@microsoft/decorators';
// // import { Log } from '@microsoft/sp-core-library';
// // import {
// //   BaseApplicationCustomizer
// // } from '@microsoft/sp-application-base';
// // import { Dialog } from '@microsoft/sp-dialog';

// // import * as strings from 'CssLandApplicationCustomizerStrings';

// // const LOG_SOURCE: string = 'CssLandApplicationCustomizer';

// // /**
// //  * If your command set uses the ClientSideComponentProperties JSON input,
// //  * it will be deserialized into the BaseExtension.properties object.
// //  * You can define an interface to describe it.
// //  */
// // export interface ICssLandApplicationCustomizerProperties {
// //   // This is an example; replace with your own property
// //   testMessage: string;
// // }

// // /** A Custom Action which can be run during execution of a Client Side Application */
// // export default class CssLandApplicationCustomizer
// //   extends BaseApplicationCustomizer<ICssLandApplicationCustomizerProperties> {

// //   @override
// //   public onInit(): Promise<void> {
// //     Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
// //     console.log("onInit method called"); // Add this line

// //     let message: string = this.properties.testMessage;
// //     if (!message) {
// //       message = '(No properties were provided.)';
// //     }

// //      Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
// //     // alert(`Hello from ${strings.Title}:\n\n${message}`);
// //     // alert("Test message");


// //     console.log(Dialog);
// //     if (Dialog) {
// //         console.log("Dialog module is available");
// //     } else {
// //         console.log("Dialog module is NOT available");
// //     }

// // // Ensure DialogManager is initialized


// //     setTimeout(() => { Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`); }, 5000); // Adding a slight delay

// //     console.log(Dialog);
// // for (const key in Dialog) {
// //     console.log(`${key}: ${Dialog[key]}`);
// // }


// //     return Promise.resolve();
// //   }
// // //   @override
// // // public onInit(): Promise<void> {
// // //     Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
// // //     console.log("onInit method called");

// // //     let message: string = this.properties.testMessage;
// // //     if (!message) {
// // //         message = '(No properties were provided.)';
// // //     }

// // //     setTimeout(() => {
// // //         Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
// // //     }, 10000);  // Adding a slight delay

// // //     return Promise.resolve();
// // // }

// // }

// import { override } from '@microsoft/decorators';
// import { Log } from '@microsoft/sp-core-library';
// import {
//   BaseApplicationCustomizer
// } from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

// import * as strings from 'CssLandApplicationCustomizerStrings';

// const LOG_SOURCE: string = 'CssLandApplicationCustomizer';

// export interface ICssLandApplicationCustomizerProperties {
//   // This is an example; replace with your own property
//   testMessage: string;
// }

// export default class CssLandApplicationCustomizer
//   extends BaseApplicationCustomizer<ICssLandApplicationCustomizerProperties> {

//   @override
//   public onInit(): Promise<void> {
//     Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
//     console.log("onInit method called");

//     let message: string = this.properties.testMessage;
//     if (!message) {
//       message = '(No properties were provided.)';
//     }

//     console.log(Dialog);
//     if (Dialog) {
//       console.log("Dialog module is available");
//     } else {
//       console.log("Dialog module is NOT available");
//     }

//     // Using a Promise to ensure `Dialog.alert` is properly invoked
//     Promise.resolve().then(() => {
//       Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch((error) => {
//         console.error("Dialog.alert failed", error);
//       });

//       // Alternative dialog method if alert fails
//       Dialog.prompt(`Prompt from ${strings.Title}:\n\n${message}`).then(response => {
//         console.log("Prompt response:", response);
//       }).catch((error) => {
//         console.error("Dialog.prompt failed", error);
//       });
//     });

//     console.log(Dialog);
//     for (const key in Dialog) {
//       console.log(`${key}: ${Dialog[key]}`);
//     }

//     return Promise.resolve();
//   }
// }


import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import * as strings from 'CssLandApplicationCustomizerStrings';

const LOG_SOURCE: string = 'CssLandApplicationCustomizer';

export interface ICssLandApplicationCustomizerProperties {
  testMessage: string;
}

export default class CssLandApplicationCustomizer extends BaseApplicationCustomizer<ICssLandApplicationCustomizerProperties> {
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }
    Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    // Inject custom CSS
    const cssUrl: string = `${this.context.pageContext.web.absoluteUrl}/CustomStyle/CustomStyles.css`; // Update with actual path
    const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
    const customStyle: HTMLLinkElement = document.createElement('link');
    customStyle.href = cssUrl;
    customStyle.rel = 'stylesheet';
    customStyle.type = 'text/css';
    head.appendChild(customStyle);

    return Promise.resolve();
  }
}


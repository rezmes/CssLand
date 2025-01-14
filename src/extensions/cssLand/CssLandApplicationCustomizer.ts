import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'CssLandApplicationCustomizerStrings';

const LOG_SOURCE: string = 'CssLandApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICssLandApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class CssLandApplicationCustomizer
  extends BaseApplicationCustomizer<ICssLandApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    console.log("onInit method called"); // Add this line

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

     Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
    // alert(`Hello from ${strings.Title}:\n\n${message}`);
    // alert("Test message");


    return Promise.resolve();
  }
}

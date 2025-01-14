
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
    const cssUrl: string = `${this.context.pageContext.web.absoluteUrl}/CustomStyle/CustomStyles.css`;
    const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
    const customStyle: HTMLLinkElement = document.createElement('link');
    customStyle.href = cssUrl;
    customStyle.rel = 'stylesheet';
    customStyle.type = 'text/css';
    head.appendChild(customStyle);

    return Promise.resolve();
  }
}


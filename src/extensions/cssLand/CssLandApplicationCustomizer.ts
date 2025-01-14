import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import * as strings from 'CssLandApplicationCustomizerStrings';

const LOG_SOURCE: string = 'CssLandApplicationCustomizer';

export default class CssLandApplicationCustomizer extends BaseApplicationCustomizer<{}> {
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

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

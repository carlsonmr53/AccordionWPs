//import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
//  PropertyPaneButton,
//  PropertyPaneButtonType,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
//import { IReadonlyTheme } from '@microsoft/sp-component-base';
//import { escape } from '@microsoft/sp-lodash-subset';
//import styles from './AccordionV1WebPart.module.scss';
import * as strings from 'AccordionV1WebPartStrings';

import * as jQuery from 'jquery';
import 'jqueryui';

//import { Modal } from "dattatable";

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IAccordionV1WebPartProps {
  description: string;
  accordionHtml: string;
  accordionTitle: string;
}

export default class AccordionV1WebPart extends BaseClientSideWebPart<IAccordionV1WebPartProps> {

  public constructor() {
    super();
  
    SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
  }  

  public render(): void {

    this.domElement.innerHTML = `
      ${this.properties.accordionTitle}
      <div class="accordion">
        ${this.properties.accordionHtml}
      </div>
    `;

    const accordionOptions: JQueryUI.AccordionOptions = {
      animate: true,
      collapsible: false,
      icons: {
        header: 'ui-icon-circle-arrow-e',
        activeHeader: 'ui-icon-circle-arrow-s'
      }
    };

    jQuery('.accordion', this.domElement).accordion(accordionOptions);    
  
  }
/*
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private ButtonClick(oldVal: any): any {
      this.properties.accordionTitle = "Testing My New Accordion Title";

      Modal.setHeader("<b>Accordion Web Part Details</b>");

      Modal.setBody(`
<table style='font-family: Arial' width='100%' border='1'>
<tr>
  <td valign='top'><b>Description:</b></td>
  <td>
    The <span style='font-weight: bold; color: darkblue'>Accordion Web Part</span> implements a simple way to present Sections in a Collapsed or Expanded manner.
    <br /><br />
    Each Section has a Header and the Section's Details. Adjacent to the Header is
    an arrow Icon which the user can click to Expand the Section. The <strong><u>Web Part's Properties</u></strong> are used to define the Sections.
  </td>
</tr>
<tr><td colspan="2">
  <hr />
  <b>Web Part Properties:</b>
  <hr />
  </td>
</tr>
<tr>
  <td align='right' valign='top'>&nbsp;&nbsp;&nbsp;&nbsp;<b>accordionTitle:</b></td>
  <td>If defined, displays a Title for the Accordion Web Part</td>
</tr>
<tr>
  <td align='right' valign='top'>&nbsp;&nbsp;&nbsp;&nbsp;<b>accordionHtml:</b></td>
  <td>
    Defines each section as an 'H3' header and a 'div'.	<br /><br />
    For Example:
    <hr />
    &lt;h3&gt;Section One Title&lt;/h3&gt;<br />
    &nbsp;&nbsp;&lt;div&gt;<br />
	  &nbsp;&nbsp;&nbsp;&nbsp;Section One Line One&lt/br&gt<br />
	  &nbsp;&nbsp;&nbsp;&nbsp;Section One Line Two&lt/br&gt<br />
	  &nbsp;&nbsp;&nbsp;&nbsp;Section One Line Three&lt/br&gt<br />
    &nbsp;&nbsp;&lt;/div&gt;<br />
    &lt;h3&gt;Section Two Title&lt;/h3&gt;&lt;div&gt;Section Two Text&lt;/div&gt;<br />
    &lt;h3&gt;Section Three Title&lt;/h3&gt;&lt;div&gt;Section Three Text&lt;/div&gt;<br />
    <hr />
    Displays as the following:
    <hr />
    Accordion Title
    <hr />
    &#8595&nbsp;Section One Title<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section One Line One<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section One Line Two<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section One Line Three<br />
    &#8594&nbsp;Section Two Title<br />
    &#8594&nbsp;Section Three Title<br />
  </td>
</tr>
</table>
`)
      Modal.setFooter("");

      Modal.show();

      return "test"
    }
*/
protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },

        groups: [
          {
            groupName: "Accordion Details",
            groupFields: [
//              PropertyPaneButton('Click Here', 
//                {
//                  text: "Web Part Details",
//                  buttonType: PropertyPaneButtonType.Normal,
//                  onClick: this.ButtonClick.bind(this)
//                }),
              PropertyPaneTextField('accordionTitle', {
                label: "Accordion Title",
                multiline: false,
                resizable: false,
                deferredValidationTime: 5000,
                placeholder: "Please enter Accordion Title", "description": "accordionTitle property field"
              }),
              PropertyPaneTextField('accordionHtml', {
                label: "Accordion HTML",
                multiline: true,
                resizable: true,
                rows: 40,
                deferredValidationTime: 5000,
                placeholder: "Please enter Accordion HTML", "description": "accordionHtml property field"
              })
            ]
          }
        ]
      }
    ]
  }
}
}

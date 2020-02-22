import {RXTextfieldable} from "./textfieldable"
import {addonHeadingPseudo} from "../schemas/heading/pseudo-heading"
import {addonHeadingDisplay} from "../schemas/heading/display"
import {addonTypyLead} from "../schemas/content/lead"
import {addonGeneralTextfield} from "../schemas/general/textfield"

export class HTMLDd extends RXTextfieldable{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupHtml'
    this.toolboxInfo.elementId = 'htmlDl'
    this.toolboxInfo.elementName = "dd"
    this.className = 'HTMLDd'

    //this.editMarginStyle.padding = '20px;'
    //this.editMarginStyle = {}

    //this.groups.paragraphOptions = {
    //  label:'Paragraph Options'
    //}
    this.$meta.tag = 'dd'
    this.label = "dd"
    this.acceptedChildren=''
    this.rejectChildren = ['BSCol']
  }

  make(){
    return new HTMLDd
  }


}

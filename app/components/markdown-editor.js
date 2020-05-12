import MarkdownEditor from 'ember-cli-markdown-editor/components/markdown-editor';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class MarkdownEditorComponent extends MarkdownEditor  {
 
  @action handleTextareaBlur(){
    var that = this,
      textComponent = document.getElementById(that.get('textareaId')),
      selection, startPos, endPos,
      lastchar = '\n';

    startPos = textComponent.selectionStart;
    endPos = textComponent.selectionEnd;
    selection = textComponent.value.substring(startPos, endPos);

    if (startPos) {
      lastchar = textComponent.value.substring(startPos - 1, startPos);
    }

    that.setProperties({
      startPos: startPos,
      endPos: endPos,
      selection: selection,
      lastchar: lastchar
    });
  }
 
  @action applyStyle(regex, requireSelection = false, promptText = null, tooltip = null ,enter){
    this.set('regex', regex);
    this.set('enter', enter);
    this.set('promptText', promptText);
    this.set('tooltip', tooltip);

    if(!this.selection && requireSelection){
      this.set('modal', true);
      this.set('dialog', true);
    } else if (promptText){
      this.set('modal', true);
      this.set('dialog', false);
    } else {
      this.set('modal', false);
      this.send('setValue', regex, enter);
    }
  }

  @action confirm(result) {
    let that = this,
      regex = that.get('regex'),
      enter = that.get('enter');
      regex = regex.replace('{{result}}', result);
    this.send('setValue', regex, enter);
    this.set('modal', '');
  }

  @action cancel() {
    this.set('modal', '');
  }

  @action undo() {
    var that = this,
      undoHistory = that.get('undoHistory').toArray();

    if(undoHistory.length === 0){
      alert('No more steps to undo.');
      return false;
    }

    var restoreValue = undoHistory.pop();

    that.setProperties({
      undoHistory: A(undoHistory),
      value: restoreValue
    });
  }
}

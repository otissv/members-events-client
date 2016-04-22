/*
* Text Editor component
 */

import { Editor } from 'draft-js';

export default class TextEditor extends React.Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (eventEditor) {
    this.props.setEventEditor(eventEditor);
  }

  render () {
    const { eventEditor } = this.props;

    return <Editor editorState={eventEditor} onChange={this.handleChange} />;
  }
}


TextEditor.propTypes = {
  setEventEditor: React.PropTypes.func.isRequired,
  eventEditor: React.PropTypes.object.isRequired
};

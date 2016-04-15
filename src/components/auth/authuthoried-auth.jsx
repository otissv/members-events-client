/*
* Authorisation component
 */

'use strict';
import { propTypes } from '../../helpers';


export default class Authuthoried extends React.Component{
  componentWillMount () {
    const { isLoggedIn, redirectTo, path } = this.props;

    if(!isLoggedIn) {
      const loadtion = path || '/';

      redirectTo(loadtion);
    }
  }

  render () {
    const ComposedClass = this.props.component;

    return <ComposedClass {...this.props}/>;
  }
}

Authuthoried.propTypes = propTypes;

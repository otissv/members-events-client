'use strict';


import Navigation from './navigation-component.jsx';

const Layout = (props) => (
  <div>
    <Navigation />
    { props.children }
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.any
};


export default Layout;

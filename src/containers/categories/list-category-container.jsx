/*
* List categories container
 */


import { connect } from 'react-redux';
import actions from 'actions';
import { mapStateToProps } from 'reducers';
import Categories from 'components/categories/list-categories.jsx';


class CategoriesContainer extends React.Component{
  componentWillMount () {
    const {
      getCategories,
      setCategories,
      storage } = this.props;

    const { _id, token } = storage;

    getCategories(_id, token).payload
      .then(response => {
        setCategories(response.data.result);
      });
  }

  render () {
    return <Categories {...this.props} />;
  }
}


CategoriesContainer.propTypes = {
  getCategories: React.PropTypes.func.isRequired,
  setCategories: React.PropTypes.func.isRequired,
  storage  : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(CategoriesContainer);

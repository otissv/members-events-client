/*
* Category container
 */


import { connect } from 'react-redux';
import actions from 'actions';
import { mapStateToProps } from 'reducers';
import Categories from 'components/categories/view-categories.jsx';


class CategoryContainer extends React.Component{
  componentWillMount () {
    const {
      getCategory,
      categorySelected,
      setCategory,
      storage
    } = this.props;

    const { _id, token } = storage;

    getCategory(_id, token, categorySelected).payload
      .then(response => {
        setCategory(response.data.result);
      });
  }

  render () {
    return <Categories {...this.props}/>;
  }
}

CategoryContainer.propTypes = {
  getCategory     : React.PropTypes.func.isRequired,
  categorySelected: React.PropTypes.string.isRequired,
  setCategory     : React.PropTypes.func.isRequired,
  storage       : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(CategoryContainer);

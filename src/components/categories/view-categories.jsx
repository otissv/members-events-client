/*
* View category component
*/

import {
  CATEGORIES_ROUTE,
  CATEGORY_EDIT_ROUTE
} from '../../contants';

import { Link } from 'react-router';
import deleteCategory from './delete-categories';

class Category extends React.Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    deleteCategory(this.props);
  }

  render () {
    const { category, categorySelected } = this.props;

    return <div>
      <h1>Category Profile</h1>
      color   :  {category.color}<br />
      Title   : {category.title}<br />
      Students: {category.students}<br />
      Satuts  : {category.satuts}<br />

      <Link to={CATEGORIES_ROUTE} >Back</Link>
      <Link to={`${CATEGORY_EDIT_ROUTE}/${categorySelected}`} >Edit</Link>
      <a href='#' onClick={this.handleDelete}>Detele</a>
    </div>;
  }

}

export default Category;


Category.propTypes = {
  category        : React.PropTypes.object.isRequired,
  categorySelected: React.PropTypes.string.isRequired
};

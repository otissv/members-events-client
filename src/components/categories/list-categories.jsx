/*
* List categories component
*/


import { objectToArray } from '../../helpers';
import { Link } from 'react-router';


import {
  CATEGORIES_ROUTE,
  CATEGORY_NEW_ROUTE
} from '../../contants';


export default class Categorys extends React.Component {
  constructor (props) {
    super(props);

    this.handleSetCategory =  this.handleSetCategory.bind(this);
  }


  handleSetCategory (e) {
    const memId = e.target.dataset.memid;

    this.props.selectCategory(memId);
  }


  render () {
    const items = objectToArray(this.props.categoriesAll).map(item => {
      return <li key={item._id}>
        <Link
          data-memId={item._id}
          onClick={this.handleSetCategory}
          to={`${CATEGORIES_ROUTE}/${item._id}`}
        >
          {item.title}
        </Link>
      </li>;
    });


    return <div>
      <h1>Categories</h1>
      <Link to={CATEGORY_NEW_ROUTE}>New catgory</Link>

      <ul>{items}</ul>
    </div>;
  }
}


Categorys.propTypes = {
  categoriesAll: React.PropTypes.object,
  selectCategory: React.PropTypes.func.isRequired
};

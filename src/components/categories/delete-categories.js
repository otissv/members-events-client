/*
* Delete category component
*/

import { CATEGORIES_ROUTE } from '../../contants';

export default function deleteCategory(props) {
  const {
    removeCategoryFromList,
    removeCategory,
    selectCategory,
    categorySelected,
    setCategory,
    storage,
    redirectTo,
    categoriesAll
  } = props;

  const { _id, token } = storage;

  removeCategory(_id, token, categorySelected).payload
    .then(response => {
      if(!response.data.success) {
        console.log(response.data.message);
      }

      removeCategoryFromList(categoriesAll, categorySelected);
      setCategory({});
      selectCategory(null);
      redirectTo(CATEGORIES_ROUTE);
    });
}

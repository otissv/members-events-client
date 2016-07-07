import ListItem from '../../../../react-uikit-components/components/react-uikit-list/lib/list-item';

const CategorytSelect = (props) => {
  const { body, icon } = props;


  return <ListItem
    href="#"
    {...props}
    body={
      <span><i {...icon}></i> {body}</span>
    }
  >

  </ListItem>;
};


CategorytSelect.propTypes = {
  body   : React.PropTypes.any,
  icon   : React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};


export default CategorytSelect;

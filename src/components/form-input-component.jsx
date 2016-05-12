
const FormInpunt = (props) => {
	const {
		field,
		id,
		label,
		name,
		type,
		onEvents,
		input,
	} = props;

	return <div className="uk-form-row">
      <label className="uk-form-label" >{label}</label>
      <div className="uk-form-controls">
        <input type={type || 'text'}
          className={`form-group ${field.touched && field.invalid ? 'uk-form-danger' : ''}`}
          {...field} {...input}
        />
      </div>

      <div className='uk-text-danger'>
      {field.touched ? field.error : ''}
      </div>
    </div>;
};

export default FormInpunt;


FormInpunt.propType ={
	field: React.PropTypes.object.isRequired,
	label: React.PropTypes.string,
	type : React.PropTypes.string
};

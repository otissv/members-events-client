/*
* Invited Component
*/


import FormInput from 'react-uikit-form/lib/form-input';

const Invited = ({ clients, invitees }) => {

  const fullName = (_id) => invitees.filter((i) => i.client._id === _id);


  const items = clients.map((c, index) => {

    const { firstName, lastName } = invitees ? fullName(c.client._id.value) : '';

    return <div key={index}>
      <span>{firstName} {lastName} </span>

      <FormInput
        {...c.client._id}
        margin='right'
        display='inlineBlock'
      />

      <FormInput
        {...c.attended}
        margin='right'
        display='inlineBlock'
        type='checkbox'
      />


    </div>;
  });

  return <div>
    {items}
  </div>;
};


Invited.propTypes = {
  clients : React.PropTypes.array.isRequired,
  invitees: React.PropTypes.array
};


export default Invited;

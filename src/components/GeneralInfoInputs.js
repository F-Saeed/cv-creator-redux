import './sass/inputs.scss';
import { useDispatch } from 'react-redux';
import { onInfoChange } from './jsComponents/actions';
import { useSelector } from 'react-redux';

const GeneralInfoInputs = (props) => {
  const { name, id } = props;
  const generalInfo = useSelector((state) => state.generalInfo);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;
    dispatch(onInfoChange(currentValue, id));
  };

  return (
    <div className='general-input'>
      <h3>{name}:</h3>
      <input id={id} value={generalInfo[id]} onChange={handleChange} />
    </div>
  );
};

export default GeneralInfoInputs;

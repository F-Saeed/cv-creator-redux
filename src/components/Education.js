import { useSelector, useDispatch } from 'react-redux';
import { onInfoChange, onEduSubmit } from './jsComponents/actions';
import './sass/education.scss';
import './sass/inputs.scss';

const Education = () => {
  const educationState = useSelector((state) => state.education);
  const { schoolName, major, educationStart, educationEnd } = educationState;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(onInfoChange(event.target.value, event.target.id));
  };

  return (
    <section className='education'>
      <h2>Education</h2>
      <form onSubmit={(event) => dispatch(onEduSubmit(event))}>
        <div>
          <h3>School Name:</h3>
          <input
            id='schoolName'
            type='text'
            value={schoolName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Major:</h3>
          <input id='major' type='text' value={major} onChange={handleChange} />
        </div>
        <div>
          <h3>Starting Year:</h3>
          <input
            id='educationStart'
            type='text'
            value={educationStart}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Graduation Year:</h3>
          <input
            id='educationEnd'
            type='text'
            value={educationEnd}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Add Education</button>
      </form>
    </section>
  );
};

export default Education;

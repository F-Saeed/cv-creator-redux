// External Imports
import { useSelector, useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';

// Internal Imports
import { onInfoChange, onExpSubmit } from './jsComponents/actions';

// SASS
import './sass/experience&projects.scss';
import './sass/inputs.scss';

const Experience = () => {
  const experienceState = useSelector((state) => state.experience);
  const { companyName, position, from, to, expDescr } = experienceState;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(onInfoChange(event.target.value, event.target.id));
  };

  const descrHandleChange = (newValue, editor) => {
    dispatch(onInfoChange(newValue, editor.id));
  };

  return (
    <section className='experience'>
      <h2>Work Experience</h2>
      <form onSubmit={(event) => dispatch(onExpSubmit(event))}>
        <div>
          <h3>Company Name:</h3>
          <input
            id='companyName'
            type='text'
            value={companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Position Title:</h3>
          <input
            id='position'
            type='text'
            value={position}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>From:</h3>
          <input id='from' type='text' value={from} onChange={handleChange} />
        </div>
        <div>
          <h3>To:</h3>
          <input id='to' type='text' value={to} onChange={handleChange} />
        </div>
        <div className='expDescr-div'>
          <h3>Description:</h3>
          <Editor
            id='expDescr'
            value={expDescr}
            onEditorChange={descrHandleChange}
            apiKey='rlbryazfwlm9gaq1xyg33hn2jvg28o09o1unw7xwijjxawnk'
            tinymceScriptSrc={
              process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'
            }
            init={{
              height: 175,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'bold italic ' + ' bullist numlist',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
        <button type='submit'>Add Experience</button>
      </form>
    </section>
  );
};

export default Experience;

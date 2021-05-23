import './Form.css';
import { useRef } from 'react';

function Form({ newQuery }) {
  const description = useRef();
  const location = useRef();
  return (
    <div className="form">
      <form action="">
        <input ref={description} type="text" placeholder="Job Description" />
        <br />
        <input ref={location} type="text" placeholder="Location" />
        <br />
        <button
          onClick={() => {
            newQuery(description.current.value, location.current.value);
          }}
          type="button"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;

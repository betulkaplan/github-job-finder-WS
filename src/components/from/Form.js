import './Form.css';

function Form() {
  return (
    <div className="form">
      <form action="">
        <input type="text" placeholder="Job Description" />
        <br />
        <input type="text" placeholder="Location" />
        <br />
        <button type="button">Search</button>
      </form>
    </div>
  );
}

export default Form;

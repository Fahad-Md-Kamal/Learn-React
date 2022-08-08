import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: enteredFirstname,
    isValid: enteredFirstnameIsValid,
    hassError: firstnameInputHasError,
    valueChangeHandler: firstnameChagneHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: resetFirstnameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastname,
    isValid: enteredLastnameIsValid,
    hassError: lastnameInputHasError,
    valueChangeHandler: lastnameChagneHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastnameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hassError: emailInputHasError,
    valueChangeHandler: emailChagneHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredFirstnameIsValid && enteredLastnameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted');
    console.log(enteredFirstname, enteredLastname, enteredEmail );

    resetFirstnameInput();
    resetLastnameInput();
    resetEmailInput();
  };

  const firstnameInputClasses = firstnameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastnameInputClasses = lastnameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstnameChagneHandler}
            onBlur={firstnameBlurHandler}
            value={enteredFirstname}
          />
          {firstnameInputHasError && (
            <p className="error-text">Please enter a firstname.</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastnameChagneHandler}
            onBlur={lastnameBlurHandler}
            value={enteredLastname}
          />
          {lastnameInputHasError && (
            <p className="error-text">Please enter a lastname.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChagneHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

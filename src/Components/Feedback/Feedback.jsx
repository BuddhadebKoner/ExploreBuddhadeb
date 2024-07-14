import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../Styles/Feedback.css';
import Hero from '../Hero/Hero';

export default function Feedback() {
  const [state, handleSubmit] = useForm("mgegnnko");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if input fields are empty
    if (!event.target.name.value.trim() || !event.target.message.value.trim()) {
      setIsEmpty(true);
      return;
    }

    // Proceed with form submission if input fields are not empty
    setIsEmpty(false);
    handleSubmit(event);
  };

  return (
    <>
      <Hero />
      <div className="feedsec-main-full-box">
        <div className="feedback-container glass-bg">
          {state.succeeded ? (
            <p className='submitting-sucess' >Form submitted successfully!</p>
          ) : (
            <>
              <h3 className='feedback-container-heading'>Drop Feed Back here</h3>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="name" className="feedback-label"></label>
                <input
                  placeholder='Your Name And Nickname'
                  id="name"
                  type="text"
                  name="name"
                  className={`feedback-input-section ${state.errors && state.errors.name ? 'error' : ''}`}
                />
                {state.errors && state.errors.name && <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="input-text-error"
                />}
                <label htmlFor="message" className="feedback-label"></label>
                <textarea
                  placeholder='Your Message'
                  id="message"
                  name="message"
                  className={`feedback-textare-section ${state.errors && state.errors.message ? 'error' : ''}`}
                />
                {state.errors && state.errors.message && <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="input-text-error"
                />}
                {isEmpty && <p className="input-text-error">Please fill out all required fields.</p>}
                <div className="checkbox-container">
                  <input type="checkbox" id="privateMessageCheckbox" />
                  <label htmlFor="privateMessageCheckbox">Private message</label>
                </div>
                <div className="feedback-btn-container">
                  <button type="submit" disabled={state.submitting} className="feedback-btn">
                    {state.submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

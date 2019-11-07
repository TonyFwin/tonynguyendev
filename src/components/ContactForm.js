import React from 'react';

export default class ContactForm extends React.Component {
    render() {
        return (
            <form 
              name="contactForm" method="POST" 
              data-netlify-recaptcha="true" 
              data-netlify="true" 
              id="contact-form"
              className="contact-form"
            >
              <p className="form-row">
                <label className="form-label" htmlFor="contact-user-name">Name</label>
                <input type="text" name="name" id="contact-user-name" className="form-input" placeholder="Enter your name"/>
                <span className="input-focus" aria-hidden="true" />
              </p>
              <p className="form-row">
                <label className="form-label" htmlFor="contact-user-email">Email</label>
                <input type="email" name="email" id="contact-user-email" className="form-input" placeholder="Enter your email address"/>
                <span className="input-focus" aria-hidden="true" />
              </p>
              <p className="form-row">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea name="message" id="contact-message" className="form-textarea" rows="5" placeholder="Enter your message" />
                <span className="input-focus" aria-hidden="true" />
              </p>
              <div data-netlify-recaptcha="true"></div>
              <input type="hidden" name="form-name" value="contactForm" />
              <p className="form-row form-submit">
                <button type="submit" className="button">Send Message</button>
              </p>
            </form>
        );
    }
}

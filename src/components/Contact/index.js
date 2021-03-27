import React from "react";
//mport Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div>
            <form className="contactForm w-75 mx-auto card-1">
                <div className="form-group">
                    <label for="formName">Name</label>
                    <input type="email" className="form-control" placeholder="Your Name" />
                </div>

                <div className="form-group">
                    <label for="formEmail">Email</label>
                    <input type="email" className="form-control" placeholder="Your Email" />
                </div>

                <div className="form-group">
                    <label for="formTextBox">Message</label>
                    <textarea className="form-control" rows="10"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-secondary btn-md active" role="button" aria-pressed="true">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;

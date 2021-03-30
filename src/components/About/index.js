import React from 'react';
import headShot from "../../assets/img/My-img8bit-com-Effect (2).jpg";



function About() {
  return (
    <section className="mx-auto text-center p-5">
      <img src={headShot} className="my-2" style={{ width: "50%" }} alt="8 bit Me"/>
    <h1 id="about">Who am I?</h1>
    <p> 
    With over 15 years of experience in Sales and Marketing, I'm looking to apply that knowledge towards helping organizations with development projects. On top of my professional experience, I bring not only experience and perspectives gained through fatherhood, but also perspectives gained through my thirst for knowledge. This knowledge has been gained through books, educations, and any number of information sources that I can find. Some may look at the phrase, "Jack of all trades, but a master of none" as a negative, but I do not. I subscrive to the view supported by David Epstein in "Range", that diverse experiences and knowledge provide the skills that can deliver better results.
    </p>
  </section>
  );
}

export default About;
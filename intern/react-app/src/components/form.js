// Import necessary dependencies
import React, { useState } from 'react';
import './form.css';

// Main StartupForm component
const StudentPortalForm= () => {
  // State for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [date, setDate] = useState('');
  const [daySelection, setDaySelection] = useState('');
  const [startupIdea, setStartupIdea] = useState('');
  const [b2bOrB2c, setB2bOrB2c] = useState('');
  const [ideaType, setIdeaType] = useState('');
  const [ideaExplanation, setIdeaExplanation] = useState('');
  const [businessModel, setBusinessModel] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (
      !fullName.trim() ||
      !email.trim() ||
      !mobileNumber.trim() ||
      !date.trim() ||
      !daySelection.trim() ||
      !startupIdea.trim() ||
      !b2bOrB2c.trim() ||
      !ideaType.trim() ||
      !ideaExplanation.trim() ||
      !businessModel.trim()
    ) {
      // Display an error message or handle validation as needed
      console.error('Please fill in all the fields');
      return;
    }

    // If all fields are filled, proceed with form submission
    console.log('Form submitted:', {
      fullName,
      email,
      mobileNumber,
      date,
      daySelection,
      startupIdea,
      b2bOrB2c,
      ideaType,
      ideaExplanation,
      businessModel,
    });

    setFullName('');
    setEmail('');
    setMobileNumber('');
    setDate('');
    setDaySelection('');
    setStartupIdea('');
    setB2bOrB2c('');
    setIdeaType('');
    setIdeaExplanation('');
    setBusinessModel('');
    // Add further logic for submitting the form data, e.g., sending it to a server
  };

  return (
    <section id="Form">
    <form onSubmit={handleSubmit}>
      <h1>Feedback Submission Form</h1>

      {/* Field 1: First Name and Email */}
      <div className="input-container">
        <div>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
        </div>

      {/* Field 2: Mobile Number */}
      <div>
        <label>Mobile Number:</label>
        <input type="tel" placeholder="Enter Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required/>
      </div>
      <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
      </div>
      {/* Field 3: Select Date and Enter Day Section */}
      <div className="form-row">
        <div>
          <label>Select the date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </div>
        <div>
          <label>Enter the Day:</label>
          <input type="text" placeholder="Enter the day" value={daySelection} onChange={(e) => setDaySelection(e.target.value)} required/>
        </div>
      </div>

      {/* Field 4: What kind of startup idea do you have? */}
      <div>
        <label>What Changes Did  I Do In Website?</label>
        <select value={startupIdea} onChange={(e) => setStartupIdea(e.target.value)}>
          <option value="" disabled>Select</option>
          <option value="Header">Header</option>
          <option value="pie Charts">Pie Charts</option>
          <option value="Table">Table</option>
          <option value="Nav Bar">Nav Bar</option>
          <option value="Side Bar"> Side Bar</option>
          <option value="Footer">Footer</option>
          <option value="Form">Form</option>
          <option value="Cards">Cards</option>
          <option value="Css">Css</option>
        </select>
      </div>

      {/* Field 5: Is your business idea B2B or B2C? */}
      <div className="checkbox-container">
        
        <label> Is My Website responsive Perfectly?</label>
        <div>
          <input type="checkbox" value="B2B" checked={b2bOrB2c === 'B2B'} onChange={() => setB2bOrB2c('B2B')} />
          Yes
        </div>
        <div>
          <input type="checkbox" value="B2C" checked={b2bOrB2c === 'B2C'} onChange={() => setB2bOrB2c('B2C')} />
          No
        </div>
        <div>
          <input type="checkbox" value="Both" checked={b2bOrB2c === 'Both'} onChange={() => setB2bOrB2c('Both')} />
          Some Changes
        </div>
        <p></p>
      </div>
      <div className="radio-container">
        <p></p>
        <label>How my page looking ? </label>
        <div>
          <input type="radio" value="Product-based" checked={ideaType === 'Product-based'} onChange={() => setIdeaType('Product-based')} />
          Good
        </div>
        <div>
          <input type="radio" value="Service-based" checked={ideaType === 'Service-based'} onChange={() => setIdeaType('Service-based')} />
           Bad
          <p></p>
        </div>
        <p></p>
      </div>

      
      <div>
        <label>Feedback About My Page:</label>
        <textarea placeholder="feedback about my page" value={ideaExplanation} onChange={(e) => setIdeaExplanation(e.target.value)} required/>
      </div>

      <div>
        <label>Remarks</label>
        <textarea placeholder="enter remarks " value={businessModel} onChange={(e) => setBusinessModel(e.target.value)} required/>
      </div>

      <button type="submit">Submit</button>
    </form>
    </section>
  );
};

export default StudentPortalForm;
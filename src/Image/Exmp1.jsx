import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submittedForms, setSubmittedForms] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setSubmittedForms([...submittedForms, formData]);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Submitted Forms</h2>
        <ul>
          {submittedForms.map((data, index) => (
            <li key={index}>
              <strong>Name:</strong> {data.name} <br />
              <strong>Email:</strong> {data.email} <br />
              <strong>Message:</strong> {data.message}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyForm;
// import React from 'react';

// class LifecycleDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   // Invoked immediately after the component is mounted
//   componentDidMount() {
//     console.log('Component did mount');
//     // Simulate a data fetch
//     // You can also observe state changes causing render calls
//   }

//   // Invoked immediately after updating occurs
//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component did update');
//     if (prevState.count !== this.state.count) {
//       console.log('Count state has changed:', this.state.count);
//     }
//   }

//   // Invoked immediately before a component is unmounted and destroyed
//   // componentWillUnmount() {
//   //   console.log('Component will unmount');
//   //   // Any necessary cleanup
//   // }

//   handleClick() {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   }

//   render() {
//     console.log('Render');
//     return (
//       <div>
//         <h1>React Lifecycle Methods Demo</h1>
//         <div>
//           <p>Count: {this.state.count}</p>
//           <button onClick={this.handleClick}>Increment</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default LifecycleDemo;


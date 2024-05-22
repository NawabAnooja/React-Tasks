import React, { useState } from 'react';
// import "./Product.css"
function ProductForm() {
    const [formData, setFormData] = useState({
        productName: "",
        category: "",
        department: "",
        // attachment: "",
        attachment: [],
 
        location: "",
        captcha: "",
        captchaInput: ""
    });
    const [submittedData, setSubmittedData] = useState(null);
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    }
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const selectedFiles = files.slice(0, 5); // Limit to 5 files
        const fileObjects = selectedFiles.map(file => ({
            name: file.name,
            type: file.type,
            size: file.size
        }));
        setFormData({...formData, attachment: fileObjects});
    }
    
    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const droppedFiles = files.slice(0, 5); // Limit to 5 files
        const fileObjects = droppedFiles.map(file => ({
            name: file.name,
            type: file.type,
            size: file.size
        }));
        setFormData({...formData, attachment: fileObjects});
    }
    
    const handleDragOver = (e) => {
        e.preventDefault();
    }
   
 
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateForm()) {
    //         const { captcha, captchaInput, ...formDataWithoutCaptcha } = formData;
    //         const formDataJSON = JSON.stringify(formDataWithoutCaptcha, null, 2);
    //         setSubmittedData(formDataJSON);
    //         if (Object.keys(validateForm).length === 0) {
    //             fetch('http://localhost:3000/users', {
    //               method: 'POST',
    //               headers: {
    //                 'Content-Type': 'application/json',
    //               },
    //               body: JSON.stringify(formData),
    //             })
    //               .then(response => response.json())
    //               .then(data => {
    //                 console.log('Success:', data)})};
    //         setFormData({
    //             productName: "",
    //             category: "",
    //             department: "",
    //             attachment: "",
    //             location: "",
    //             captcha: "",
    //             captchaInput: ""
    //         });
    //         generateCaptcha();
    //         console.log(formDataJSON);
    //     } else {
    //         console.log("Please fill all required fields and enter the correct captcha.");
    //     }
    // }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const { captcha, captchaInput, ...formDataWithoutCaptcha } = formData;
            const formDataJSON = JSON.stringify(formDataWithoutCaptcha, null, 2);
            setSubmittedData(formDataJSON);
            if (Object.keys(validateForm()).length === 0) {
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
   
                // Clear form data and regenerate captcha
                setFormData({
                    productName: "",
                    category: "",
                    department: "",
                    attachment: [],
                    location: "",
                    captcha: "",
                    captchaInput: ""
                });
                generateCaptcha();
            } else {
                console.log("Please fill all required fields and enter the correct captcha.");
            }
        }
    }
   
   
 
    const validateForm = () => {
        return  (
            formData.productName.trim() !== "" &&
            formData.category.trim() !== "" &&
            formData.department.trim() !== "" &&
            formData.attachment.length > 0 &&
            formData.location.trim() !== "" &&
            formData.captcha.toLowerCase() === formData.captchaInput.toLowerCase().trim()
        );
    }
 
    const generateCaptcha = () => {
        let captcha = Math.random().toString(36).substring(2, 8);
        setFormData((prevState) => ({ ...prevState, captcha }));
    }
 
    return (
        <div className="container">
            <h2>Product Form</h2>
            <form onSubmit={handleSubmit} onDrop={handleDrop} onDragOver={handleDragOver}     >
                <input type='text' name='productName' value={formData.productName} onChange={handleChange} placeholder='Product Name' /><br /><br />
                <select name='category' value={formData.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home_decor">Home Decor</option>
                    <option value="sports_outdoors">Sports & Outdoors</option>
                    <option value="fashion_outdoors">fashion & Outdoors</option>
                </select><br /><br />
                <select name='department' value={formData.department} onChange={handleChange}>
                    <option value="">Select Department</option>
                    <option value="electronics_department">Electronics Department</option>
                    <option value="clothing_department">Clothing Department</option>
                    <option value="home_decor_department">Home Decor Department</option>
                    <option value="sports_outdoors_department">Sports & Outdoors Department</option>
                </select><br /><br />
                {/* <input type='file' name='attachment' onChange={handleChange} /><br /><br /> */}
                <input type='file' name='attachment' onChange={handleFileChange} multiple /><br /><br />
                {/* Display uploaded files */}
                {formData.attachment.map((file, index) => (
                    <div key={index}>
                        <span>{file.name}</span>
                    </div>
                ))}
                <input type='text' name='location' value={formData.location} onChange={handleChange} placeholder='Location' /><br /><br />
                <p>Captcha: {formData.captcha}</p>
                <button type='button' onClick={generateCaptcha}>⟳</button><br /><br />
                <input type='text' name='captchaInput' value={formData.captchaInput} onChange={handleChange} placeholder='Enter CAPTCHA' /><br /><br />
                <button type='submit'>Submit</button>
            </form>
            {submittedData && (
                <div>
                    <h2>Submitted Data</h2>
                    <pre>{submittedData}</pre>
                </div>
            )}
        </div>
    );
}
 
export default ProductForm;

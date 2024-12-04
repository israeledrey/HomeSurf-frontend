import React, { useState } from 'react';
import NavBar from '../Components/NavBar';

const Payment = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo({
            ...paymentInfo,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!paymentInfo.cardName) newErrors.cardName = 'Cardholder name is required';
        if (!paymentInfo.cardNumber || paymentInfo.cardNumber.length !== 16) {
            newErrors.cardNumber = 'Valid card number is required (16 digits)';
        }
        if (!paymentInfo.expiryDate || !/^\d{2}\/\d{2}$/.test(paymentInfo.expiryDate)) {
            newErrors.expiryDate = 'Valid expiry date is required (MM/YY)';
        }
        if (!paymentInfo.cvv || paymentInfo.cvv.length !== 3) {
            newErrors.cvv = 'Valid CVV is required (3 digits)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Payment submitted successfully!');
            // כאן ניתן לשלב את לוגיקת ההגשה או הקישור ל-API
        }
    };

    return (

        <div className="sign-in-container">
            <NavBar />
            <div className="sign-in-content">
                <h1>Payment Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="sign-in-box">
                        <label htmlFor='cardName'>Cardholder Name</label>
                        <input
                            type="text"
                            name="cardName"
                            id="cardName"
                            value={paymentInfo.cardName}
                            onChange={handleInputChange}
                        />
                        {errors.cardName && <span className="error">{errors.cardName}</span>}

                        <label htmlFor='cardNumber'>Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            id="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handleInputChange}
                            maxLength="16"
                        />
                        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}

                        <label htmlFor='expiryDate'>Expiry Date (MM/YY)</label>
                        <input
                            type="text"
                            name="expiryDate"
                            id="expiryDate"
                            value={paymentInfo.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                        />
                        {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}


                        <label htmlFor='cvv'>CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            id='cvv'
                            value={paymentInfo.cvv}
                            onChange={handleInputChange}
                            maxLength="3"
                        />
                        {errors.cvv && <span className="error">{errors.cvv}</span>}
                        <button type="submit">Submit Payment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;
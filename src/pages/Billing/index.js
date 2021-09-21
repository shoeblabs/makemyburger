import React, { useState, useEffect } from 'react';
import BillingCard from '../../components/Billing/BillingCard';
import CheckoutCard from '../../components/Billing/CheckoutCard';
import INGREDIENTS from '../../Data/ingredients';
import './billing.css';



const Billing = () => {

    const [orderDetails, setOrderDetails] = useState({});
    const [orderIngredients, setOrderIngredients] = useState({});

    const handleItemSelected = (type, itemDetails, value) => {
        if (type === 'info') {
            setOrderIngredients((oldState) => ({
                ...oldState,
                [itemDetails.name]: value,
            }))
        } else if (type === 'ingredients') {
            setOrderIngredients((oldState) => ({
                ...oldState,
                [itemDetails.id]: {
                    id: itemDetails.id,
                    name: itemDetails.name,
                    value: value,
                    price: itemDetails.price,
                    total: itemDetails.price * value,
                }
            }))
        }
    }

    const handlePriceCalculation = () => {
        orderIngredients.value().reduce((acc, current, index) => acc + current.total, [0]);
    }

    useEffect(() => {
        if (INGREDIENTS.length) {
            INGREDIENTS.forEach((item) => {
                if (item.isQuantityFixed) {
                    setOrderDetails((oldState) => ({
                        ...oldState,
                        [item.name]: item.default_quantity
                    }))
                }
            });
        }
    }, []);

    useEffect(() => {
        // handlePriceCalculation();
    }, [orderIngredients]);

    console.log(orderDetails);

    return (
        <div className="billing-page row gap">
            <BillingCard  
                orderDetails={orderIngredients}
                onItemSelected={handleItemSelected} 
            />    
            <CheckoutCard />
        </div>
    );
}

export default Billing;

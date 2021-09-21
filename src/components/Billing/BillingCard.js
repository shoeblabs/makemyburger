import React, { useEffect } from 'react';
import INGREDIENTS from '../../Data/ingredients';

const BillingCard = (prop) => {

    const { orderDetails, onItemSelected } = prop;

    return (
        <div className="column billing-card gap">
            <input type="text" name="name" onChange={(e) => onItemSelected('info', { name: 'name' }, e.target.name)} />

            {INGREDIENTS.map((item) => {
                return (
                    <div key={item.id} className="row gap">
                        <div>{item.name}</div>
                        {item.max_quantity === 1 ? (
                            <input 
                                type="checkbox"
                                checked={orderDetails[item.name]}
                                name={item.name}
                                onChange={(e) => onItemSelected('ingredients', item, e.target.checked)} 
                            />
                        ) : (
                            <input 
                                type="number"
                                name={item.name}
                                value={orderDetails[item.name]}
                                defaultValue={item.default_quantity}
                                readOnly={item.isQuantityFixed}
                                onChange={(e) => onItemSelected('ingredients', item, Number(e.target.value))}
                            />
                        )}
                    </div>
                );    
            })}
        </div>
    )
}

export default BillingCard;
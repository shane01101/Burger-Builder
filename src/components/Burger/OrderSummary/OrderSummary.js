import React from 'react';

import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
				{props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Auxillary>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>Continue to Checkout?</p>
			<Button btnType='Danger' clicked={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType='Success' clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Auxillary>
	);
};

export default orderSummary;

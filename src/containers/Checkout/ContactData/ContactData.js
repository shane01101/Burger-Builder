import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axiosInstance from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false
	};

	orderHandler = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Max Schwar',
				address: {
					street: 'test street',
					zipCode: '33434',
					country: 'Germany'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};
		axiosInstance
			.post('/orders.json', order)
			.then(response => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({ loading: false });
			});
	};

	render() {
		let form = (
			<form>
				<Input
					inputtype='input'
					type='email'
					name='email'
					placeholder='Your email'
				/>
				<Input
					inputtype='input'
					type='text'
					name='street'
					placeholder='Your street'
				/>
				<Input
					inputtype='input'
					type='text'
					name='name'
					placeholder='Your name'
				/>
				<Input
					inputtype='input'
					type='text'
					name='postal'
					placeholder='Postal Code'
				/>
				<Button btnType='Success' clicked={this.orderHandler}>
					ORDER
				</Button>
			</form>
		);

		if (this.state.loading) form = <Spinner />;

		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;

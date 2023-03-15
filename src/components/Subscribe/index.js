import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { HiOutlineArrowRight } from 'react-icons/hi';
import { FiCheck } from 'react-icons/fi';

import './subscribe.scss';
import { handleErrorSubscribeForm } from '../../utils/handleErrorsSubscribe';
import ErrorMessage from '../ErrorMessage';
import SucessMessage from '../SuccessMessage';

const Subscribe = () => {
	const form = useRef();
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [validated, setValidated] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const errorResponse = handleErrorSubscribeForm(email);
		if (errorResponse) {
			setLoading(false);
			return setError(errorResponse);
		}
		emailjs
			.sendForm(
				'service_mv9ye8d',
				'template_5s88x97',
				form.current,
				'gsBOg-q0c5EHAnEPY'
			)
			.then(
				(result) => {
					setValidated(true);
					setLoading(false);
				},
				(error) => {
					setLoading(false);
				}
			);
		e.target.reset();
	};

	return (
		<>
			<form ref={form} onSubmit={handleSubmit} className='formInputSubscribe'>
				<input
					onChange={(e) => {
						setError('');
						setEmail(e.target.value);
					}}
					className={error && 'inputError'}
					placeholder='Ingresa tu email'
					name='user_email'
					value={email}
				/>
				<button className={error && 'btnError'} type='submit'>
					{loading ? (
						<div className='contSpinner'>
							<div className='loadSpinner'></div>
						</div>
					) : validated ? (
						<FiCheck color='#55de55' size={20} />
					) : (
						<HiOutlineArrowRight size={20} />
					)}
				</button>
				<div className='contError'>
					{error.length > 0 && <ErrorMessage message={error} />}
				</div>
				<div className='contSuccessMessage'>
					{validated && <SucessMessage />}
				</div>
			</form>
		</>
	);
};

export default Subscribe;

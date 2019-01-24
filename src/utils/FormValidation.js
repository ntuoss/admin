// TODO: sync validation and async validation from firebase
const EmailValidation = value => {
	// can implement more complex logic
	const re = /^ntuoss@gmail.com$/i;
	return re.test(value);
};

const PasswordValidation = async value => {
	// can implement more complex logic
	return 'FIREBASE_AUTH';
};

export { EmailValidation, PasswordValidation };

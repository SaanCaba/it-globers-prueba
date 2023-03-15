export function handleErrorSubscribeForm(email) {
	if (email.length === 0) return 'Por Favor coloque un correo.';
	if (!email.includes('@')) return "Por favor coloque '@' en el correo";
	if (email.length > 75) return 'Por favor coloque un correo más corto';
	const regEx =
		/^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!regEx.test(email)) return 'Por favor, coloque un correo válido';
}

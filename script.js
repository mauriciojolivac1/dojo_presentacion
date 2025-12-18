document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        // Obtenemos los valores y eliminamos espacios en blanco al inicio y final
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Limpiar mensaje de error previo
        errorMessage.textContent = '';

        if (username === '' || password === '') {
            // Evita que el formulario se envíe
            event.preventDefault();
            
            // Muestra el mensaje de error en el contenedor inferior
            errorMessage.textContent = 'Por favor cumple con todos los campo';

            // Limpiar los campos de entrada
            usernameInput.value = '';
            passwordInput.value = '';
            
            // Opcional: poner el foco de nuevo en el primer campo
            usernameInput.focus();
        } else {
            // Si todo está bien, podrías proceder con el login
            console.log('Validación exitosa, intentando ingresar...');
        }
    });
});

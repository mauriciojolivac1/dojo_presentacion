document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDisplay = document.getElementById('error-message');

    // Lista de usuarios autorizados
    const users = [
        { user: 'Admin', pass: '1234' },
        { user: 'Ginett', pass: '2345' },
        { user: 'Oscar', pass: '3456' },
        { user: 'Cristian', pass: '4567' },
        { user: 'Luis', pass: '5678' },
        { user: 'Felipe', pass: '6789' }
    ];

    loginForm.addEventListener('submit', (event) => {
        // Evita que el formulario se envíe realmente
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Limpiar estilos y mensajes previos
        messageDisplay.textContent = '';
        messageDisplay.className = '';

        // 1. Validar campos vacíos
        if (username === '' || password === '') {
            messageDisplay.textContent = 'Por favor cumple con todos los campo';
            messageDisplay.classList.add('error-text');
            
            usernameInput.value = '';
            passwordInput.value = '';
            usernameInput.focus();
            return;
        }

        // 2. Validar credenciales
        const foundUser = users.find(u => u.user === username && u.pass === password);

        if (foundUser) {
            // Mensaje de éxito
            messageDisplay.textContent = `¡Bienvenido(a) ${foundUser.user}! Ingreso exitoso.`;
            messageDisplay.classList.add('success-text');
            
            // Opcional: Limpiar campos después del éxito
            usernameInput.value = '';
            passwordInput.value = '';
        } else {
            // Mensaje de error por credenciales incorrectas
            messageDisplay.textContent = 'Usuario o contraseña incorrectos';
            messageDisplay.classList.add('error-text');
            
            // Limpiar campos y dar foco
            usernameInput.value = '';
            passwordInput.value = '';
            usernameInput.focus();
        }
    });
});

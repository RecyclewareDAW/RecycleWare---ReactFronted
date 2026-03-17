// URL base que tenemos en Spring Boot (application.properties)
const BASE_URL = 'http://localhost:8080/api';

export const api = {
    // Método para pedir datos (GET)
    get: async (endpoint) => {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                credentials: 'include'
            });
            if (!response.ok) throw new Error('Error en la petición de red');
            return await response.json();
        } catch (error) {
            console.error(`Error GET en ${endpoint}:`, error);
            throw error;
        }
    },

    // Método para enviar datos (POST)
    post: async (endpoint, data) => {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    // Le decimos a Java que le estamos mandando un JSON
                    'Content-Type': 'application/json', 
                },
                credentials: 'include',
                // Convertimos el objeto de React a un texto JSON para mandarlo
                body: JSON.stringify(data) 
            });

            // Capturamos la respuesta del UserController de Java
            const responseData = await response.json();

            // Si Java nos devuelve un código de error (ej. 400 Bad Request)
            if (!response.ok) {
                // Lanzamos el error con el mensaje que tú configuraste en tu backend
                throw new Error(responseData.error || responseData.message || 'Error en la petición POST');
            }

            return responseData;
            
        } catch (error) {
            console.error(`Error POST en ${endpoint}:`, error);
            throw error; // Lanzamos el error para que el componente (como Registro.jsx) lo capture y lo muestre
        }
    },

    // Método para actualizar datos (PUT)
    put: async (endpoint, data) => {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', 
                },
                credentials: 'include',
                body: JSON.stringify(data) 
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error || responseData.message || 'Error en la petición PUT');
            }

            return responseData;
            
        } catch (error) {
            console.error(`Error PUT en ${endpoint}:`, error);
            throw error;
        }
    }
};
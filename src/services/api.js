
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const api = {
    
    get: async (endpoint) => {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                credentials: 'include'
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Error GET en ${endpoint}. Status: ${response.status}. Body: ${errorText}`);
                throw new Error(`Error en la petición de red (Status: ${response.status})`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error GET en ${endpoint}:`, error);
            throw error;
        }
    },

  
    post: async (endpoint, data) => {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                credentials: 'include',
                body: JSON.stringify(data) 
            });

            const responseData = await response.json();

            if (!response.ok) {
                console.error(`Error POST en ${endpoint}. Status: ${response.status}. Body:`, responseData);
                throw new Error(responseData.error || responseData.message || `Error en la petición POST (${response.status})`);
            }

            return responseData;
            
        } catch (error) {
            console.error(`Error POST en ${endpoint}:`, error);
            throw error; 
        }
    },

   
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
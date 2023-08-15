class ApiService {
    constructor() {
        this.apiUrl = process.env.REACT_APP_API_URL;
    }

    async getUsers() {
        const endpoint = 'send-users';
        const response = await fetch(`${this.apiUrl}/${endpoint}`);
        if (response.ok) {
            const data = response.json();
            return data;
        } else {
            return {
                'message': 'query failed',
                'status': response.status
            };
        }
    }

    async saveUser(name, cellphone) {
        const endpoint = 'save-user';
        const data = {
            name,
            cellphone
        };
        const response = await fetch(`${this.apiUrl}/${endpoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const res = response.json();
            return res;
        } else {
            return {
                'message': 'query failed',
                'status': response.status
            };
        }
    }
}

export default ApiService;
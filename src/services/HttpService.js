class HttpService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(url) {
        const response = await fetch(`${this.baseURL}${url}`);
        const data = await response.json();
        return data;
    }

    async post(url, data) {
        const response = await fetch(`${this.baseURL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    }

    async put(url, data) {
        const response = await fetch(`${this.baseURL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    }

    async delete(url) {
        const response = await fetch(`${this.baseURL}${url}`, {
            method: 'DELETE'
        });
        const responseData = await response.json();
        return responseData;
    }
}

export default HttpService;
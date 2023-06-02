import { toast } from "react-toastify";

interface Get {
    url: string
}

interface Post {
    url: string,
    headers: object | null,
    body: object,
}

export default class Fetch {

    async get(params: Get) {

        try {
            const response = await fetch(params.url, {
                method: 'GET'
            });

            return await this.processResponse(response);
        } catch (error) {
            console.error("fetch error: ", error)
        }
    }

    async post(params: Post) {
        try {
            const response = await fetch(params.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...params.headers
                },
                body: JSON.stringify(params.body)
            });

            return await this.processResponse(response);
        } catch (error) {
            console.error("fetch error: ", error)
        }
    }

    async processResponse(response: Response) {
        if (!response.ok) {
            console.error("There was no response")
        }

        const body = await response.json();

        if (response.status != 200) {
            toast.error(body.message);
        }

        else {
            if (body.message)
                toast.success(body.message)
        }

        return body.data;
    }
}

import { hostUrl } from "../utils/urls"

const headers = new Headers();
headers.append("Content-Type", "application/json");

const requestOptions = {
    method: 'POST',
    headers: headers
};

const fetchJobs = async (offset) => {
    const response = await fetch(hostUrl, {
        ...requestOptions,
        body: JSON.stringify({
            limit: 6,
            offset
        })
    });
    return await response.json();
}

export default fetchJobs;
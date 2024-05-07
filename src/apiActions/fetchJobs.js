import { hostUrl } from "../utils/urls"

const headers = new Headers();
headers.append("Content-Type", "application/json");

const requestOptions = {
    method: 'POST',
    headers: headers
};

const fetchJobs = async (offset, signal) => {
    const response = await fetch(hostUrl, {
        signal,
        ...requestOptions,
        body: JSON.stringify({
            limit: 6,
            offset
        })
    });
    return await response.json();
}

export default fetchJobs;
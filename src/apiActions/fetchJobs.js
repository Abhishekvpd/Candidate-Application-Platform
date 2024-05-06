import { hostUrl } from "../utils/urls"

const headers = new Headers();
headers.append("Content-Type", "application/json");

const requestOptions = {
    method: 'POST',
    headers: headers
};

const fetchJobs = async () => {
   const response =  await fetch(hostUrl, requestOptions);
   return await response.json();
}

export default fetchJobs;
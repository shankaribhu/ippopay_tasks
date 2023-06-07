import { sendResultToUI } from "../../../src/libs/helper";

export default function handler (req, res) {
    let { method } = req;
    console.log("method", method);
    if(method = 'POST') {
        let input = req.body;
        const headers = {
            'Content-Type' : 'application/json',
            Authorization : 'Basic ***********='
        };
        let payload = new URLSearchParams();
        const params = {
            url: 'http://localhost:4002/v1/user/signup',
            method: method,
            data: input,
            headers
        };
        console.log("param", params)
        return sendResultToUI(params, res);
    };
};
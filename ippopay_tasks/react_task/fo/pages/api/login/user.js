import { sendResultToUI } from '../../../src/libs/helper';

export default function handler (req, res) {
    let { method } = req;
    console.log("API MEthod", method)
    if(method == 'POST') {
        let input = req.body;
        const headers = {
            'Content-Type' : 'application/json',
            Authorization : 'Basic ***********='
        };
        let payload = new URLSearchParams()
        console.log("payload", payload, input)
        const params = {
            // url: `${envVars.SERVICE_URL}/v1/user/login`,
            url:"http://localhost:4002/v1/user/login",
            method: method,
            data: input,
            headers
        }
        return sendResultToUI(params, res);
    }
}
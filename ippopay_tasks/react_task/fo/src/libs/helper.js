import axios from "axios";

export const sendResultToUI = async (req, res) => {
    try {
        const { url, method, headers, params, data, cookies } = req;
        let header = headers;
        const requestConfig = {
            url,
            method: method || 'get',
            headers: header,
            params,
            data
        }
        
        const result = await axios(requestConfig);
        result.data['status'] = 200;
        res.json(result.data)
    } catch (error) {
       const { response } = error
       if(response) {
        res.status(response.status).json(response.data)
       } 
       else{
        res.status(400).json(null)
       }
    }
    return res;
}
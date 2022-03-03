export default async (req, res, next) => {
    const url: string[] = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, '').split('/');
    const method: string = url.pop();
    const controller: string= url.slice(1).join('/');
    const api = require('../api/' + controller);
    const result = await api.default(req.params);
    res.end(JSON.stringify(result));
};

// NetworkClient.js
import request from 'superagent';
import Rx from 'rx';
import { HTTPMethods } from './HTTPMethods';
import { apiUrl } from '../../data/global_constants';

function NetworkClient() {
    this.basePath = apiUrl;
}

function generateRequest(apiDefinition, finalUrl, requestHandler) {
    let requestBuilder = request;
    if (apiDefinition.method === HTTPMethods.POST) {
        requestBuilder = request.post(finalUrl);
        requestBuilder.send(apiDefinition.body);
    } else if (apiDefinition.method === HTTPMethods.GET) {
        requestBuilder = request.get(finalUrl);
    } else if (apiDefinition.method === HTTPMethods.PUT) {
        requestBuilder = request.put(finalUrl);
        requestBuilder.send(apiDefinition.body);
    }
    if (apiDefinition.headers) requestBuilder.set(apiDefinition.headers);
    requestBuilder.end((err, res) => {
        requestHandler(err, res);
    });
}

NetworkClient.prototype.observableClient = function createObservableClient(apiDefinition) {
    const finalUrl = `${this.basePath}${apiDefinition.path}`;
    return Rx.Observable.create((observer) => {
        generateRequest(apiDefinition, finalUrl, (err, res) => {
            if (err) {
                observer.onError(err);
            } else {
                const data = res.text ? JSON.parse(res.text) : null;
                observer.onNext(data);
                observer.onCompleted();
            }
        });
    });
};

module.exports = new NetworkClient();

import api from './config'

export function helloWorld() {
    return api.get('api/hello');
}
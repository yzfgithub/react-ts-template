import mock from '../mockAdapter';
import { createResult } from '../commonResult';

mock.onPost('home/getAuthMenu').reply(config => {
    return [200, createResult({data: {}})]
})
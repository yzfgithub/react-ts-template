import { axiosInstance } from '@/utils/axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axiosInstance);
export default mock;

import mock from '../mockAdapter';
import { createResult } from '../commonResult';

mock.onPost('message/getList').reply(config => {
    const arr:any[] = [{
        applyUser: '测试内容894h',
        endTime: '测试内容93mi',
        id: 66481,
        projectSchedule: '45140',
        projectScheduleName: '测试内容7qcf',
        projectType: '测试内容bv03',
        quotaUse: 54238,
        startTime: '测试内容25vn',
        venderCode: '测试内容2qx9',
        venderName: '测试内容7a81',
        venderType: '56302',
        venderTypeName: '测试内容i3fo'
      }];
    return [200, createResult({data: arr, total: 100})]
})
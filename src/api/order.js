import request from '@utils/request';

export const reqOrderList = (page, limit) => {
	return request({
		method: 'GET',
		url: `/order/auth/${page}/${limit}`
	});
};

import { reqOrderList } from '@api/order';

export default {
	state: {
		orderShopList: {
			records:[]
		}
	},
	getters: {
		records(state){
			return state.orderShopList.records
		},
		orderShopList(state){
			return state.orderShopList
		}
	},
	actions: {
		async getOrderShopList({ commit }, {page, limit} ) {
           
			const orderShopList = await reqOrderList(page, limit);
			commit('REQ_ORDER_LIST', orderShopList);
		}
	},
	mutations: {
		REQ_ORDER_LIST(state, orderShopList) {
			state.orderShopList = orderShopList;
		}
	}
};

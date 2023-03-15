import { dataProducts } from '../../data/data';
import { galleryImages } from '../../data/dataImagesCallToAction';
import { SET_GALLERY_IMAGES, SET_PRODUCTS } from '../actions/types';
const initialState = {
	products: [],
	galleryImages: [],
};

export function rootReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: dataProducts,
			};
		case SET_GALLERY_IMAGES:
			return {
				...state,
				galleryImages: galleryImages,
			};
		default:
			return state;
	}
}

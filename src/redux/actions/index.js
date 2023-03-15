import { SET_GALLERY_IMAGES, SET_PRODUCTS } from './types';

export function setProducts() {
	return {
		type: SET_PRODUCTS,
	};
}

export function setGalleryImages() {
	return {
		type: SET_GALLERY_IMAGES,
	};
}

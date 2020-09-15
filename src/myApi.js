import products from './data/dummy.json'

export default {
    getProducts: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 500);
            console.log(reject);
        });
    },
    products: (action, id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id);
            }, 100);
            console.log(reject);
            console.log(action);
        });
    }
}
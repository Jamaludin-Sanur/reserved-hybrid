import { createStore as reduxCreateStore } from "redux";

let store = null;

function createStore(){
    store = reduxCreateStore(...arguments)
    return store;
}

function getStore(){
    return store;
}

export default {
    createStore, getStore
}




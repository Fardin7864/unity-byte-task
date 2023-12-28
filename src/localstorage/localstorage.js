import { toast } from "react-toastify";

const successToast = (message) => { 
    toast.success(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
 }
const errorToast = (message) => { 
    toast.error(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
 }
const addToLocalStorage= id =>{
    const items = getFromLocalStorage()
    const exist = items.find(itemId => itemId.id === id.id);
    if (!exist) {
        items.push((id));
        setToLocalStorage(JSON.stringify(items));
        successToast('Successfully add to cart!')
    }
    else{
        errorToast('Already added this!')
    }

}

const deleteFromLocalStorage = (id) => {
    const items = getFromLocalStorage();
    const updatedItems = items.filter((item) => item.id !== id.id);
    setToLocalStorage(JSON.stringify(updatedItems));
    successToast('Item removed from the cart!');
}

const addToFev= id =>{
    const items = getFromLocalStorageFev()
    const exist = items.find(itemId => itemId === id);
    if (!exist) {
        items.push(id);
        setToLocalStorageFev(JSON.stringify(items)); 
        successToast('Added to Fevorite list!')
    }
    else{
        errorToast('Already exist on Fevorit!')
    }

}

const getFromLocalStorageFev = () =>{
    const items = localStorage.getItem('FevItem');
    return JSON.parse(items) || [];
}

const setToLocalStorageFev = (items) =>{
    localStorage.setItem('FevItem',items);
}


const getFromLocalStorage = () =>{
    const items = localStorage.getItem('items');
    return JSON.parse(items) || [];
}
const setToLocalStorage = (items) =>{
    localStorage.setItem('items',items);
}

export {addToLocalStorage,getFromLocalStorage,setToLocalStorage, addToFev, getFromLocalStorageFev, setToLocalStorageFev,deleteFromLocalStorage};
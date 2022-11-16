const setItem = (key, value) => {
    window.localStorage.setItem('key',JSON.stringify(value));

};

const getItem = (key, value) => {
    if (window.localStorage.getItem(key))
    {
        return JSON.parse(localStorage.getItem('user'));
    }

    return undefined;
};

export function setUser(user){
    setItem('user',user);
}

export function getUser() {
    getItem('user');
}

export function clear(){
    window.localStorage.clear();
}
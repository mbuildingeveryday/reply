export const getLocalStorageData = (key: string) => {
    const comments = JSON.parse(localStorage.getItem(key) || '[]');
    return comments;
}

export const setLocalStorageData = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
}
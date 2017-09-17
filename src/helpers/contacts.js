export const  ContactCreator = () => {
    return {
        id: Math.floor(Math.random() * 10000),
        isActive: true,
        name: "New Contact",
        phone: "",
        email: "",
        address: "",
        notes: "",
        picture: {
            thumbnail: null,
            large: null
        }
    }
}

export const setContactsToInactive = (items) => {
    return items.map(item => {
        item.isActive = false;
        return item;
    })
}
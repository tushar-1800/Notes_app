export const validEmail = (email) => {
    const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"];
    const regex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!regex.test(email)) return false;

    const domain = email.split("@")[1];
    return allowedDomains.includes(domain);
};

export const getInitials = (name) => {

    if(!name) return '';

    const nameArray = name.split(' ');
    if(nameArray.length === 1) return (nameArray[0][0]).toUpperCase();
    return (nameArray[0][0] + nameArray[1][0]).toUpperCase();
}

export default function helper() {
    // console.log('helper function');
    
}


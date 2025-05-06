export const toSlug = (str = '') => {
    // Convert to lower case
    var newStr = str;
    newStr = newStr.toLowerCase();

    // Delete unicode
    newStr = newStr
        .normalize('NFD') // convert to Unicode
        .replace(/[\u0300-\u036f]/g, ''); // delete Unicode

    // Replace special characters
    newStr = newStr.replace(/[đĐ]/g, 'd');

    // Delete special characters
    newStr = newStr.replace(/([^0-9a-z-\s])/g, '');

    // Delete space and replace by -
    newStr = newStr.replace(/(\s+)/g, '-');

    // Delete - duplicate
    newStr = newStr.replace(/-+/g, '-');

    // Delete - at the beginning and end of the string
    newStr = newStr.replace(/^-+|-+$/g, '');

    // return
    return newStr;
};

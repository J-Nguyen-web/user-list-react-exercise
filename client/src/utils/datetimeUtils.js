export const fromIsoDate = (isoDate) => { // форматиране на датата
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return formattedDate;
}

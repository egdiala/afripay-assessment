export const formatDate = (value: Date | string): string => {
    const date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime())) {
        return "";
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
};
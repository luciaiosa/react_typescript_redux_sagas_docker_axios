export const formattedDate= (enteredDate: string) => {
    const date = enteredDate.substring(0, 10);
    const hour = enteredDate.substring(11, 19);
    return `${date} ${hour}`;
}
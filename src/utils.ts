export const dateStringToDate = (dateString: string): Date => {
    // My solution
    // const dateArr = dateString.split('/');
    // return new Date(+dateArr[2], +dateArr[1] - 1, +dateArr[0]);

    // Lecturer's solution
    const dateParts = dateString.split('/').map(part => parseInt(part));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

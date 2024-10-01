export function getDatesBetween(
    startDateStr: string,
    endDateStr: string
): string[] {
    const dates: string[] = [];
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dates.push(formatDate(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}

function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const calculateDateDifference = (startDate: string) => {
    const today = new Date(getCurrentDate());
    const start = new Date(startDate);

    const timeDifference = today.getTime() - start.getTime();

    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return dayDifference;
};

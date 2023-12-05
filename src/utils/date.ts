export interface DateRange {
  startDate: Date,
  endDate: Date
}

export function subDays(date: Date, amount: number): Date {
  const result = new Date(date);
  result.setDate(date.getDate() - amount);
  return result;
}

export function getCurrentDate(): string {
  const today: Date = new Date();

  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
  const day: number = today.getDate();

  // Định dạng tháng và ngày để đảm bảo có hai chữ số
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`;

  // Tạo chuỗi yyyy-mm-dd
  const formattedDate: string = `${year}-${formattedMonth}-${formattedDay}`;

  return formattedDate;
}

export function splitDateRange(dateRange: [Date, Date], numberOfIntervals: number = 7): String[] {
  const [from, to] = dateRange;
  const result: String[] = [];

  const interval = (to.getTime() - from.getTime()) / (numberOfIntervals - 1);

  for (let i = 0; i < numberOfIntervals; i++) {
    const date = new Date(from.getTime() + i * interval);
    result.push(date.toString());
  }

  return result;
}

export const getTimeDaysArray = (dateRange: DateRange) => {
  const daysArray = [];
  let currentDate = new Date(dateRange.startDate);

  // Loop từ ngày bắt đầu đến ngày kết thúc
  while (currentDate <= new Date(dateRange.endDate)) {
    daysArray.push(currentDate.getTime());
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return daysArray;
};
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

export default function formatDateToMonthAndYear(date) {
  const formattedDate = format(new Date(date), "MMMM yyyy");

  return formattedDate;
}

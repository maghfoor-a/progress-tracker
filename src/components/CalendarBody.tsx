import "./CalendarBody.css";
import { getDaysInYear, differenceInCalendarDays } from "date-fns";

export default function MainContent(): JSX.Element {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const startOfYear = new Date(currentYear, 0, 1);

  const daysInYearSoFar = differenceInCalendarDays(currentDate, startOfYear);

  //I want boxes to have 7 rows
  const boxesPerRow = 7;

  //making boxes for each day of the year so far
  const boxes = [];
  for (let i = 0; i < daysInYearSoFar; i++) {
    const xPosition = Math.floor(i / boxesPerRow) * 10;
    const yPosition = (i % boxesPerRow) * 10;
    boxes.push(
      <rect
        key={i}
        x={xPosition}
        y={yPosition}
        width={10}
        height={10}
        fill="red"
      ></rect>
    );
  }

  return (
    <>
      <h1>MAIN CONTENT</h1>
      <svg width={1000} height={500} className="SVGBox">
        {boxes}
      </svg>
    </>
  );
}

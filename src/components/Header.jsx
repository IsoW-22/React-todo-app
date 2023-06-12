const date = new Date();
function DateTime() {
  const [month, day, dayWeek] = [
    date.getMonth(),
    date.getDay(),
    date.getDate(),
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <p className="text-2xl text-center font-mono center mt-4">
      today is {dayNames[day]}, {dayWeek}/{month + 1}
    </p>
  );
}

function Header({ css }) {
  return (
    <div className={css} id="header">
      <DateTime />
    </div>
  );
}

export default Header;

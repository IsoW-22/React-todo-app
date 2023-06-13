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
    <p className="text-2xl text-center font-mono center mt-5">
      today is {dayNames[day]}, {dayWeek}/{month + 1}
    </p>
  );
}

function Header({ css, showNav, onclick }) {
  return (
    <div className={css} id="header">
        <img src="https://img.icons8.com/ios-filled/20/menu--v3.png" alt="menu--v3"
          className="absolute cursor-pointer top-1 left-1 block sm:hidden"
          onClick={onclick}
          />
      <DateTime />
    </div>
  );
}

export default Header;

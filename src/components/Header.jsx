const date = new Date();
function DateTime() {
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <p>
      {month} <br />
      {day} <br />
      {year}
    </p>
  );
}

function Header() {
  return(
    <div className="bg-snow col-span-2">
      <DateTime />
    </div>
  )
}

export default Header;

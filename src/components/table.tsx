import { useEffect } from "react";
import { juleBruser } from "../App";

function Table({ changing }: { changing: boolean }) {
  useEffect(() => {
    console.log("update");
  }, [changing]);
  return (
    <div className="overflow-x-auto hero min-h-screen text-white" id="table">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-white">
            <th>Nummer:</th>
            <th>Navn</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {juleBruser.map((julebrus) => {
            const rating = localStorage.getItem(
              julebrus.julebrusNummer + "-rating"
            );
            const type = localStorage.getItem(
              julebrus.julebrusNummer + "-type"
            );
            return (
              <tr>
                <th>{julebrus.julebrusNummer}</th>
                <td>{type}</td>
                <td>{rating}</td>
              </tr>
            );
          })}

          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

import { Link } from "react-router-dom";

export default function Stocks() {
  return (
    <>
      <h1>Stocks</h1>
      <ul>
        <li className="horribleStock">Apple: -$2534.86</li>
        <li className="goodStock">Google: $145.87</li>
        <li className="greatStock">Red Hat: $2734.45</li>
        <li className="badStock">IBM: -$41.15</li>
        <li className="goodStock">Microsoft: $324.59</li>
      </ul>
      Click here to go back to the <Link to="/">lounge</Link>, if you can still
      afford our drinks.
    </>
  );
}

import "./styles.css";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
import requests from "./requests";
import { movieBaseUrl } from "./Constants";
import Banner from "./Components/Banner";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {requests.map((request) => (
        <Row
          key={request.id}
          title={request.title}
          fetchUrl={movieBaseUrl + request.url}
          isLargeRow={request.id === 1 ? true : false}
          // isLargeRow={request.id ? true : false}
        />
      ))}
    </div>
  );
}

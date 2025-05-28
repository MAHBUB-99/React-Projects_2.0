import url from "./assets/body-bg.png";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function App() {
  return (
    <div
      className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center"
      style={{ backgroundImage: `url(${url})` }}
    >
      <Header />
      <WeatherBoard />
    </div>
  );
}

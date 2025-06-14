import url from "./assets/body-bg.png";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function Page() {
  return (
    <div
      className="grid place-items-center h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${url})` }}
    >
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

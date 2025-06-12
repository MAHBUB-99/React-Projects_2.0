import Page from "./Page";
import { WeatherProvider } from "./provider";

export default function App() {
  return (
    <WeatherProvider>
      <Page />
    </WeatherProvider>
  );
}

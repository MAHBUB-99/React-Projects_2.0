import cloud from "../../assets/icons/cloud.svg";
import humidity from "../../assets/icons/humidity.svg";
import temp_max from "../../assets/icons/temp-max.svg";
import temp_min from "../../assets/icons/temp-min.svg";
import wind from "../../assets/icons/wind.svg";

export default function WeatherCondition() {
  return (
    <div>
      <p class="text-sm lg:text-lg font-bold uppercase mb-8">
        thunderstorm with light drizzle
      </p>
      <ul class="space-y-6 lg:space-y-6">
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div class="inline-flex space-x-4">
            <p>19°</p>
            <img src={temp_max} alt="temp-max" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div class="inline-flex space-x-4">
            <p>19°</p>
            <img src={temp_min} alt="temp-min" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div class="inline-flex space-x-4">
            <p>58%</p>
            <img src={humidity} alt="humidity" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div class="inline-flex space-x-4">
            <p>86%</p>
            <img src={cloud} alt="cloudy" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div class="inline-flex space-x-4">
            <p>5km/h</p>
            <img src={wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}

import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

function Ecommerce() {
  return (
    <div className="mt-24">
      <div className="border-0 border-blue-500 flex flex-wrap lg:flex-nowrap justify-center">
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="orange"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="border-0 border-pink-500 flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => {
            return (
              <div
                key={item.title}
                className="border-0 border-orange-500 bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:min-w-44 p-4 pt-9 rounded-2xl"
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span
                    className={`text-sm ml-2 ${
                      parseInt(item.percentage) < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-0 border-blue-500 flex gap-10 flex-wrap justify-center">
        <div className="border-0 border-green-500 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="border-0 border-pink-500 flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="border-0 border-yellow-500 flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>{<GoDotFill />}</span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>{<GoDotFill />}</span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="border-0 border-purple-500 mt-10 flex flex-wrap gap-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$90,250</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    25%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$45,250</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="orange"
                  text="Download Report"
                  borderRadius={10}
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;

import Section from "./components/Section";
import logo from "./images/logo.svg";

const App = () => {
  return (
    <div className="p-5 bg-Cream min-h-screen flex flex-col justify-center">
      <div className="flex w-full sm:w-[480px] m-auto flex-col items-center">
        <div className="flex items-center justify-between bg-Soft-red w-full rounded-xl px-5 py-7">
          <div>
            <p className="text-Very-pale-orange font-Dm-Dans">My balance</p>
            <p className="text-Very-pale-orange font-Dm-Dans mt-2 font-semibold text-3xl">
              $921.48
            </p>
          </div>
          <img src={logo} alt="logo" />
        </div>

        <div className="mt-5 bg-Very-pale-orange w-full rounded-xl py-7">
          <p className="text-Dark-brown font-Dm-Dans px-5 font-semibold text-3xl">
            Spending - Last 7 days
          </p>

          <Section />

          <div className="w-[90%] h-[2px] bg-Cream mt-7 m-auto"></div>

          <div className="px-5 mt-7 w-full flex items-end justify-between">
            <div className="w-[50%]">
              <p className="text-Medium-brown text-base sm:text-xl font-Dm-Dans">
                Total this month
              </p>
              <p className="text-Dark-brown text-3xl sm:text-4xl font-semibold font-Dm-Dans">
                $478.33
              </p>
            </div>
            <div className="flex flex-col w-[50%] justify-end items-end">
              <p className="font-Dm-Dans text-md sm:text-xl font-semibold text-Dark-brown">
                +2.4%
              </p>
              <p className="font-Dm-Dans text-md sm:text-xl text-Medium-brown">
                from last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

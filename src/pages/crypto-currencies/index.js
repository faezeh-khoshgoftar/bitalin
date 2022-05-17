import Search from "../../components/crypto-currencies/search";
import CryptoCurrencyDesktop from "../../components/crypto-currencies/crypto-currency-desktop";
import CryptoCurrencyMobile from "../../components/crypto-currencies/crypto-currency-mobile";
import { coins } from "../../data";

function CryptoCurrencies() {
  return (
    <div className="pb-6 md:pt-24 md:pb-32">
      <div className="grid gap-5 md:mb-16 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        <h1 className="text-xl md:text-[28px] md:font-medium">رمزارزها</h1>
        <div className="xl:col-start-4 lg:col-start-3 md:col-start-2">
          <Search />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        {coins.map((coin) => {
          return (
            <div key={coin.id}>
              <div className="md:hidden">
                <CryptoCurrencyMobile data={coin} />
              </div>
              <div className="hidden md:block ">
                <CryptoCurrencyDesktop data={coin} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CryptoCurrencies;

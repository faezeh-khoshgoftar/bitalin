import Image from "next/image";

function CryptoCurrencyMobile({ data }) {
  return (
    <section className="p-6 bg-white rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.2)] flex justify-between text-xs ">
      {/* right */}
      <div className="flex items-center">
        <Image
          src={data.icon}
          alt={data.titleEN}
          width={28}
          height={28}
          layout="fixed"
        />
        <div className="mr-1">
          <h1 className="text-sm">{data.titleFA}</h1>
          <div className="flex ">
            <h2 className=" text-gray ml-1.5">{data.titleEN}</h2>
            <span
              style={{ direction: "ltr" }}
              className={` text-xs ${
                data.change > 0
                  ? "text-[#00CC66]"
                  : data.change === 0
                  ? "text-[#CB9633]"
                  : "text-[#F5465D]"
              }`}
            >
              {data.change} %
            </span>
          </div>
        </div>
      </div>
      {/* left */}
      <div className="flex flex-col" style={{ direction: "ltr" }}>
        <p>
          <span>{data.IRT}</span> IRT
        </p>
        <p className="text-gray">
          <span>{data.USDT}</span> USDT
        </p>
      </div>
    </section>
  );
}

export default CryptoCurrencyMobile;

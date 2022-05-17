import Image from "next/image";

function CryptoCurrencyDesktop({ data }) {
  return (
    <section className="p-5 mb-8 bg-white">
      <div className="flex items-center justify-between">
        <Image
          src={data.icon}
          alt={data.titleEN}
          width={60}
          height={60}
          layout="fixed"
        />
        <Image
          src={data.chart}
          alt={data.titleEN}
          width={110}
          height={35}
          layout="fixed"
        />
      </div>
      <div className="flex justify-between pt-9 ">
        <div className="flex ">
          <h1>{data.titleFA}</h1>
          <h2 className="mr-1 text-gray">{data.titleEN}</h2>
        </div>
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
      <div
        className="flex flex-col pt-5 font-light"
        style={{ direction: "ltr" }}
      >
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

export default CryptoCurrencyDesktop;

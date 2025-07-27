export const Herocta = ({ className, ...props }) => {
  return (
    <div className={"h-[73px] relative " + className}>
      <div
        className="rounded-[36px] w-[303px] h-[72px] absolute left-[435px] top-px"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 255, 255, 1.00) 0%,rgba(255, 241, 114, 1.00) 80.0000011920929%)",
          boxShadow: "0px 0px 21px 0px rgba(255, 223, 87, 0.50)",
        }}
      >
        <img
          className="h-[72px] absolute right-0 left-0 top-0 overflow-visible"
          src="div-wrapper-mask-group0.svg"
        />
        <div
          className="bg-[rgba(255,255,255,0.00)] rounded-[36px] absolute right-0 left-0 bottom-0 top-0"
          style={{
            boxShadow:
              "inset 0px -4.5px 6px 0px rgba(255, 250, 215, 0.80), inset 0px 4.5px 18px 0px rgba(255, 223, 52, 0.90)",
          }}
        ></div>
        <div
          className="text-[#1f1401] text-center font-['Roboto-Bold',_sans-serif] text-2xl leading-9 font-bold absolute left-[50%] top-[50%] w-[180px] h-9 flex items-center justify-center"
          style={{ letterSpacing: "0.48px", translate: "-50% -50%" }}
        >
          Coach’s Corner{" "}
        </div>
      </div>
      <div
        className="rounded-[36px] w-[246px] h-[72px] absolute left-0 top-0"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 210, 21, 1.00) 0%,rgba(255, 241, 114, 1.00) 80.0000011920929%)",
          boxShadow: "0px 0px 21px 0px rgba(255, 223, 87, 0.50)",
        }}
      >
        <img
          className="h-[72px] absolute right-0 left-0 top-0 overflow-visible"
          src="div-wrapper-mask-group1.svg"
        />
        <div
          className="bg-[rgba(255,255,255,0.00)] rounded-[36px] absolute right-0 left-0 bottom-0 top-0"
          style={{
            boxShadow:
              "inset 0px -4.5px 6px 0px rgba(255, 250, 215, 0.80), inset 0px 4.5px 18px 0px rgba(255, 223, 52, 0.90)",
          }}
        ></div>
        <div
          className="text-[#261901] text-center font-['Roboto-Bold',_sans-serif] text-2xl leading-9 font-bold absolute left-[calc(50%_-_60px)] top-[18px] w-[117px] h-9 flex items-center justify-center"
          style={{ letterSpacing: "0.48px" }}
        >
          Highlights{" "}
        </div>
      </div>
    </div>
  );
};


export default Herocta;
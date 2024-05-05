export function Hero({ image }) {
  return (
    <>
      <div
        className="h-128 w-full md:h-172 lg:h-196 md:bg-top bg-no-repeat bg-cover bg-bottom md:bg-fixed relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#062c3b] via-transparent to-transparent"></div>
      </div>
    </>
  );
}

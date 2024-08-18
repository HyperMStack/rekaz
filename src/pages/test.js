import Flipbook from "@/components/index/Flipbook";

function test() {
  const width = 504;
  const height = 712.8;
  return (
    <div className="h-screen flex place-content-center justify-center">
      <Flipbook width={width} height={height} />
    </div>
  );
}

export default test;

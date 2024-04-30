export function InlineDescription({ inlineDescription }) {
  return (
    <div className="mx-4 md:mx-[8.75rem] my-12 grid grid-cols-5">
      <p className="col-span-5 md:col-span-2 text-lg">{inlineDescription}</p>
    </div>
  );
}

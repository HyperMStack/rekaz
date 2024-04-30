export function Info({ projectInfo }) {
  return (
    <div className="my-8 mx-4 md:mx-[8.75rem] grid grid-cols-2 gap-8 md:gap-40">
      <div className="col-span-2 md:col-span-1">
        <h1 className="my-6 text-3xl font-semibold">Project Title</h1>
        <p className="text-lg">{projectInfo.description}</p>
      </div>
      <div className="col-span-2 md:col-span-1">
        <h4 className="text-xl font-semibold my-3">Client</h4>
        <p className="text-lg">{projectInfo.clientName}</p>
        <h4 className="text-xl font-semibold my-3">Sector</h4>
        <p className="text-lg">{projectInfo.sector}</p>
        <h4 className="text-xl font-semibold my-3">Location</h4>
        <p className="text-lg">{projectInfo.location}</p>
      </div>
    </div>
  );
}

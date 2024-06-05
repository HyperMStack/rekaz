export function Info({ projectInfo, projectTitle, language }) {
  return (
    <div className="my-8 mx-4 md:mx-10 xl:mx-[8.75rem] grid grid-cols-2 gap-8 md:gap-40">
      <div className="col-span-2 md:col-span-1">
        <h1 className="my-3 text-3xl font-semibold">{projectTitle}</h1>
        <p className="text-lg">{projectInfo.description}</p>
      </div>
      <div className="col-span-2 md:col-span-1">
        <h4 className="text-xl font-semibold my-3">
          {language == "ar" ? "عدد الطوابق" : "Number of Floors"}
        </h4>
        <p className="text-lg">{projectInfo.numberFloors}</p>
        <h4 className="text-xl font-semibold my-3">
          {language == "ar" ? "مساحة الأرض" : "Plot of Area"}
        </h4>
        <p className="text-lg">
          {projectInfo.areaSize} m<sup>2</sup>
        </p>
        <h4 className="text-xl font-semibold my-3">
          {language == "ar" ? "المنطقة" : "Location"}
        </h4>
        <p className="text-lg">{projectInfo.location}</p>
      </div>
    </div>
  );
}

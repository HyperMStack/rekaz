import { useEffect, useRef } from "react";

export function StatsIncrement({ statsData }) {
  console.log("stats", statsData);
  const sectionsRef = useRef([]);

  function startCount(sect, goal) {
    let count = 0;
    let increment = Math.ceil(goal / 100); // Increment by 1% of the goal
    let timer = setInterval(() => {
      count += increment;
      if (count >= goal) {
        count = goal;
        clearInterval(timer);
      }
      sect.textContent = count;
    }, 10);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const goal = parseInt(entry.target.getAttribute("data-goal"));
            startCount(entry.target, goal);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      // style={{ backgroundImage: `url(${bgImage})` }}
      className={`h-[70vh] bg-bottom bg-no-repeat flex flex-col md:flex-row justify-between items-center p-5 md:p-10 max-w-[1350px] my-0 mx-auto`}
    >
      <div className="basis-1/2 md:basis-3/6 lg:basis-2/5 text-center md:text-start max-w-96 content-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-8">
          {statsData.title}
        </h2>
        <p className="text-base md:text-lg">{statsData.description}</p>
      </div>
      <div className="hidden md:block" />
      <div className="basis-full md:basis-2/6 lg:basis-1/5 content-center">
        {statsData.stats.map((item, i) => (
          <div className="my-10" key={i}>
            <h3 className="text-2xl md:text-3xl font-bold">
              <span
                ref={(el) => (sectionsRef.current[i] = el)}
                data-goal={item.goal}
              >
                0
              </span>
              {item.symbol}
            </h3>
            <p className="text-sm md:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

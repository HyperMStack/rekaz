import { useEffect, useRef } from "react";
import { statsData } from "../../data/data";

export function StatsIncrement() {
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
      className={`h-[80vh] bg-[url(/images/bg.jpg)] bg-bottom bg-no-repeat flex flex-col md:flex-row justify-between items-center p-5 md:p-10 max-w-[1350px] my-0 mx-auto`}
    >
      <div className="basis-full md:basis-2/5 text-center md:text-start max-w-96">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">
          Building for the best
        </h2>
        <p className="text-base md:text-lg">
          To explore and go after new ways to build, we’ve gathered the people,
          innovations, and partnerships that can anticipate and overcome new
          challenges.
        </p>
      </div>
      <div className="hidden md:block" />
      <div className="basis-full md:basis-1/5">
        {statsData.map((item, i) => (
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
            <p className="text-sm md:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

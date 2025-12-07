import { useState, useEffect } from "react";

const Overlay = ({
  start = 10,
  cycles = 3,
  delayBetweenCycles = 2000,
  onCycleComplete,
  onAllComplete
}) => {
  const [count, setCount] = useState(start);
  const [cycle, setCycle] = useState(1);
  const [state, setState] = useState("counting"); 
  // "counting" | "waiting" | "done"

  useEffect(() => {
    if (state === "done") {
      return;
    }

    if (state === "counting") {
      if (count === 0) {
        if (onCycleComplete) onCycleComplete(cycle);

        if (cycle < cycles) {
          setState("waiting");
        } else {
          setState("done");
          if (onAllComplete) onAllComplete();
        }
        return;
      }

      const timer = setTimeout(() => {
        setCount((c) => c - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (state === "waiting") {
      const waitTimer = setTimeout(() => {
        setCycle((c) => c + 1);
        setCount(start);
        setState("counting");
      }, delayBetweenCycles);

      return () => clearTimeout(waitTimer);
    }
  }, [state, count, cycle, cycles, start, delayBetweenCycles, onCycleComplete, onAllComplete]);

  if (state === "done") return null;

  return (
    <div className="overlay">
      <h1 className="overlay-text">
        {state === "waiting" ? "" : count}
      </h1>
    </div>
  );
};

export default Overlay;

import React from "react";
import { useEffect, useRef } from "react";
import "./style.css";
import { createSwapy, Swapy } from "swapy";

function App() {
  const swapy = useRef<Swapy | null>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      swapy.current = createSwapy(containerRef.current, {
        // animation: 'dynamic'
        // swapMode: 'drop',
        // autoScrollOnDrag: true,
        // enabled: true,
        // dragAxis: 'x',
        // dragOnHold: true
      });

      // swapy.current.enable(false)
      // swapy.current.destroy()
      // console.log(swapy.current.slotItemMap())

      swapy.current.onBeforeSwap((event) => {
        console.log("beforeSwap", event);
        // This is for dynamically enabling and disabling swapping.
        // Return true to allow swapping, and return false to prevent swapping.
        return true;
      });

      swapy.current.onSwapStart((event) => {
        console.log("start", event);
      });
      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
      swapy.current.onSwapEnd((event) => {
        console.log("end", event);
      });
    }
    return () => {
      swapy.current?.destroy();
    };
  }, [swapy, containerRef]);
  return (
    <div className="container" ref={containerRef}>
      <div  data-swapy-slot="a">
        <div className="item item-a" data-swapy-item="a">
          <div>A</div>
        </div>
      </div>
      <div  data-swapy-slot="b">
        <div className="item item-b" data-swapy-item="b">
          <div>B</div>
        </div>
      </div>
      <div  data-swapy-slot="c">
        <div className="item item-c" data-swapy-item="c">
          <div>C</div>
        </div>
      </div>
      <div  data-swapy-slot="d">
        <div className="item item-d" data-swapy-item="d">
          <div>D</div>
        </div>
      </div>
      <div  data-swapy-slot="e">
        <div className="item item-e" data-swapy-item="e">
          <div>E</div>
        </div>
      </div>
      <div  data-swapy-slot="f">
        <div className="item item-f" data-swapy-item="f">
          <div>F</div>
        </div>
      </div>
     
    </div>
  );
}

export default App;

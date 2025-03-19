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
        swapMode: "drop",
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
      <div data-swapy-slot="a">
        <div className="item item-a" data-swapy-item="a">
          <div>A</div>
        </div>
      </div>
      <div data-swapy-slot="b">
        <div className="item item-b" data-swapy-item="b">
          <div>B</div>
        </div>
      </div>
      <div data-swapy-slot="c">
        <div className="item item-c" data-swapy-item="c">
          <div>C</div>
        </div>
      </div>
      <div data-swapy-slot="d">
        <div className="item item-d" data-swapy-item="d">
          <div>D</div>
        </div>
      </div>
      <div data-swapy-slot="e">
        <div className="item item-e" data-swapy-item="e">
          <div>E</div>
        </div>
      </div>
      <div data-swapy-slot="f">
        <div className="item item-f" data-swapy-item="f">
          <div>F</div>
        </div>
      </div>
      <div data-swapy-slot="g">
        <div className="item item-g" data-swapy-item="g">
          <div>G</div>
        </div>
      </div>
      <div data-swapy-slot="h">
        <div className="item item-h" data-swapy-item="h">
          <div>H</div>
        </div>
      </div>
      <div data-swapy-slot="i">
        <div className="item item-i" data-swapy-item="i">
          <div>I</div>
        </div>
      </div>
      <div data-swapy-slot="j">
        <div className="item item-j" data-swapy-item="j">
          <div>J</div>
        </div>
      </div>
      <div data-swapy-slot="k">
        <div className="item item-k" data-swapy-item="k">
          <div>K</div>
        </div>
      </div>
      <div data-swapy-slot="l">
        <div className="item item-l" data-swapy-item="l">
          <div>L</div>
        </div>
      </div>
      <div data-swapy-slot="m">
        <div className="item item-m" data-swapy-item="m">
          <div>M</div>
        </div>
      </div>
      <div data-swapy-slot="n">
        <div className="item item-n" data-swapy-item="n">
          <div>N</div>
        </div>
      </div>
      <div data-swapy-slot="o">
        <div className="item item-o" data-swapy-item="o">
          <div>O</div>
        </div>
      </div>
      <div data-swapy-slot="p">
        <div className="item item-p" data-swapy-item="p">
          <div>P</div>
        </div>
      </div>
      <div data-swapy-slot="q">
        <div className="item item-q" data-swapy-item="q">
          <div>Q</div>
        </div>
      </div>
      <div data-swapy-slot="r">
        <div className="item item-r" data-swapy-item="r">
          <div>R</div>
        </div>
      </div>
      <div data-swapy-slot="s">
        <div className="item item-s" data-swapy-item="s">
          <div>S</div>
        </div>
      </div>
      <div data-swapy-slot="t">
        <div className="item item-t" data-swapy-item="t">
          <div>T</div>
        </div>
      </div>
      <div data-swapy-slot="u">
        <div className="item item-u" data-swapy-item="u">
          <div>U</div>
        </div>
      </div>
      <div data-swapy-slot="v">
        <div className="item item-v" data-swapy-item="v">
          <div>V</div>
        </div>
      </div>
    </div>
  );
}

export default App;

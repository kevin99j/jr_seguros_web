import React from 'react';
import '../assets/scss/Home.scss'

const Carousel = ({ offset, slide }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }

      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };

      let el = ref.current;

      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };

      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);

    return ref;

  }
  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}

    >

      <div
        className="slideContent hero-wrap js-fullheight"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
        <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
                        <div className="col-lg-6 animated ftco_animate">
                            <div className="mt-5">
                                <h1 className="mb-4">Tu seguridad en las mejores manos</h1>
                                <p className="mb-4">Somos una compañía encargada de velar y trabajar por el bienestar y la seguridad social de empleadores, empleados y trabajadores independientes, con el objetivo de garantizar su salud, seguridad social, su futuro y el de su familia.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

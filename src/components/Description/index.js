import React, {useRef, useEffect} from 'react';
import '../../vendors/fpsmeter.min';

const Description = () =>{
    const fpsRef = useRef();

    useEffect(() => {
        const anchor = fpsRef.current;

        // eslint-disable-next-line no-undef
        const meter = new FPSMeter(anchor, {
            heat: true,
            graph: true
        });

        function tick() {
            meter.tick();
            requestAnimationFrame(tick);
        }

        tick();
    }, [fpsRef]);

        return (
            <div className="marketing">
                <div className="spacer" />
                <div ref={fpsRef} className="fps" />
            </div>
        );
};

export default Description;
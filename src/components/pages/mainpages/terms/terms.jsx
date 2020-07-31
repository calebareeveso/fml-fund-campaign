import React from 'react';
import './terms.css';
import { Navbar, Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';

const Terms = () => {
  return (
    <ScrollIntoView>
      <div>
        <Navbar />
        <div className="container-fluid black_bg"></div>
        <div className="container shift">
          <div className="terms-text">
            <h1>TERMS AND CONDITIONS</h1>
          </div>
          <div className="agreement-wrapper">
            <div className="head-text">
              <h1>USER AGREEMENT</h1>
            </div>
            <div className="agreement-text">
              <div className="conditions">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                  nec tempus imperdiet tortor quam accumsan, elementum enim.
                  Nibh nulla neque consectetur arcu enim in nunc amet id. Arcu
                  morbi sed egestas elementum. Amet habitant tristique quam cras
                  varius integer scelerisque. Maecenas praesent tellus risus
                  pharetra. Mattis lorem commodo tellus pulvinar ut. Ullamcorper
                  scelerisque faucibus augue nisl. Lacus, convallis turpis
                  dignissim aliquet elementum enim. Nibh nulla neque consectetur
                  arcu enim in nunc amet id. Arcu morbi sed egestas elementum.
                  quam cras varius integer scelerisque. Maecenas praesent tellus
                  risus pharetra. Mattis lorem commodo tellus pulvinar ut.
                  Ullamcorper scelerisque faucibus augue nisl. Lacus, convallis
                  turpis dignissim aliquet elementum enim. Nibh nulla neque
                  consectetur arcu enim in nunc amet id. Arcu morbi sed egestas
                  elementum. quam cras varius integer scelerisque. Maecenas
                  praesent tellus risus pharetra. Mattis lorem commodo tellus
                  pulvinar ut. Ullamcorper scelerisque faucibus augue nisl.
                  Lacus, convallis turpis dignissim aliquet elementum enim. Nibh
                  nulla neque consectetur arcu enim in nunc amet id. Arcu morbi
                  sed egestas elementum. Amet habitant tristique quam cras
                  varius integer scelerisque. Maecenas praesent tellus risus
                  pharetra. Mattis lorem commodo tellus pulvinar ut. Ullamcorper
                  scelerisque faucibus augue nisl. Lacus, convallis turpis di
                  elementum enim. Nibh nulla neque consectetur arcu enim in nunc
                  amet id. Arcu morbi sed egestas elementum. Amet habitant
                  tristique quam cras varius integer scelerisque. Maecenas
                  praesent tellus risus pharetra. Mattis lorem commodo tellus
                  pulvinar ut. Ullamcorper scelerisque faucibus augue nisl.
                  Lacus, convallis turpis dignissim aliquet elementum enim. Nibh
                  nulla neque consectetur arcu enim in nunc amet id. Arcu morbi
                  sed egestas elementum. Amet habitant tristique quam cras
                  varius integer scelerisque. Maecenas praesent tellus risus
                  pharetra. Mattis lorem commodo tellus pulvinar ut. Ullamcorper
                  scelerisque faucibus augue nisl. Lacus, convallis turpis
                  dignissim aliquetgnissim aliquet elementum enim. Nibh nulla
                  neque consectetur arcu enim in nunc amet id. Arcu morbi sed
                  egestas elementum. Amet habitant tristique quam cras varius
                  integer scelerisque. Maecenas praesent tellus risus pharetra.
                  Mattis lorem commodo tellus pulvinar ut. Ullamcorper
                  scelerisque faucibus augue nisl. Lacus, convallis turpis
                  dignissim aliquet et ultrices eget magnis. Placerat in diam
                  vitae sed magna. Egestas vulputate id mauris at. Lacus amet
                  consequat sed neque justo. Praesent ut arcu, pellentesque
                  amet. Placerat in amet ullamcorper sed. Quam eros, suspendisse
                  adipiscing tempor faucibus quam velit. Aliquam in varius
                  tortor elit nec. Gravida adipiscing eu est orci sit ut neque.
                  Adipiscing scelerisque posuere mauris, adipiscing. Rhoncus ut
                  sed semper posuere at fermentum scelerisque imperdiet eros. Id
                  aliquet mauris tellus aliquam donec aliquam lacus. Odio aenean
                  suspendisse hac sed. Vestibulum amet nisl gravida at dignissim
                  aliquet facilisis. Quis id eu enim, faucibus consectetur vitae
                  enim. Sed morbi amet malesuada erat congue orci semper
                  pellentesque venenatis. Dolor elit integer convallis nec,
                  iaculis. Justo porttitor vulputate maecenas sit. Interdum
                  posuere purus nunc, sagittis. Nulla consectetur velit turpis
                  arcu facilisis ac ac. Pharetra arcu a, neque adipiscing
                  aliquam id arcu dictumst in. Ut ut urna malesuada egestas
                  adipiscing vivamu.{' '}
                </p>
              </div>
            </div>
            {/* <div className="agreement-buttons">
            <button className="btn cancel">Cancel</button>
            <button className="btn btn-danger agree">I Agree</button>
        </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </ScrollIntoView>
  );
};

export default Terms;

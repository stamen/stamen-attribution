import { stamenSvg } from './lib/string-svg';

const stamenLogo = document.createElement('img');
stamenLogo.src = `data:image/svg+xml;charset=utf-8,${stamenSvg}`;

const siteLink = document.createElement('a');
siteLink.href = 'https://stamen.com';
siteLink.appendChild(stamenLogo);

const attribution = document.createElement('div');
attribution.appendChild(siteLink);

document.body.appendChild(attribution);

const stamenLogoStyle = {
  height: '24px',
  position: 'absolute',
  bottom: '-1px'
};

stamenLogo.style = { ...stamenLogo.style, ...stamenLogoStyle };

const siteLinkStyle = {
  width: '110px',
  position: 'relative'
};

siteLink.style = { ...siteLink.style, ...siteLinkStyle };

const attributionStyle = {
  position: 'fixed',
  bottom: '0px',
  right: '12px',
  zIndex: 10000,
  display: 'flex',
  flexDirection: 'row-reverse'
};

attribution.style = { ...attribution.style, ...attributionStyle };

const updateStyle = styleObj => {
  for (const [k, v] of Object.entries(styleObj)) {
    attribution.style[k] = v;
  }
};

// First link does not get a spacer because it's next to the logo
let marker = false;
const addLink = (url, text) => {
  siteLink.style.marginRight = '6px';

  const addedLink = document.createElement('a');
  addedLink.innerHTML = text;
  addedLink.href = url;

  const spacer = document.createElement('div');
  spacer.innerHTML = marker ? '|' : ' ';

  attribution.appendChild(spacer);
  attribution.appendChild(addedLink);

  const addedLinkStyle = {
    color: 'white',
    marginRight: '6px',
    marginBottom: '6px',
    fontSize: '14px'
  };
  addedLink.style = { ...addedLink.style, ...addedLinkStyle };
  spacer.style = { ...spacer.style, ...addedLinkStyle };

  marker = true;
};

export { updateStyle, addLink };

# stamen-attribution

Stamen attribution for Stamen tooling

## Usage

In your web app, import the attribution module:

```js
import 'stamen-attribution';
```

This will run code immediately to place the Stamen attributino in the lower right hand corner.

### Adjusting style

The preferred placement of the Stamen attribution is in the lower right hand corner, but you can import a function to update the position and style of the attribution if needed for your particular tool.

```js
import { updateStyle } from 'stamen-attribution';

updateStyle({ top: '0px', left: '12px', bottom: 'unset', right: 'unset' });
```

### Adding links

In addition to the Stamen logo linking back to `https://stamen.com`, you can add additional links in the attribution as well. These will appear next to the Stamen logo attribution.

```js
import { addLink } from 'stamen-attribution';

addLink('https://stamen.com/blog/', 'Learn more');
addLink('https://github.com/stamen/my-web-tool', 'Fork on Github');
```

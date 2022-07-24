import './form.mjs';
import './map.mjs';
import './markers.mjs';
import './api.mjs';
import './reset.mjs';

import { setUserFormSubmit } from './form.mjs';
import { onResetButtonClick } from './reset.mjs';

setUserFormSubmit(onResetButtonClick);

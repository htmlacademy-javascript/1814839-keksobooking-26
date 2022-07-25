import './user-form.mjs';
import './map.mjs';
import './markers.mjs';
import './api.mjs';
import './reset.mjs';
import './filter-form.mjs';

import { setUserFormSubmit } from './user-form.mjs';
import { onResetButtonClick } from './reset.mjs';

setUserFormSubmit(onResetButtonClick);

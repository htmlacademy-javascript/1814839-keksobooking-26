import { RENDER_DELAY } from './constants.js';
import { getData, fetchMarkers } from './api.js';
import { initializeMarkers, updateMarkers } from './markers.js';
import { initializeFilterForm } from './filter-form.js';
import { debounce } from './util.js';
import { initializeAvatar } from './images.js';
import { initializeResetForm } from './reset.js';

getData(initializeMarkers);
debounce(initializeFilterForm(fetchMarkers, updateMarkers), RENDER_DELAY);
initializeAvatar();
initializeResetForm();

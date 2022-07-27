import { getData, fetchMarkers } from './api.js';
import { initializeMarkers, updateMarkers } from './markers.js';
import { inizializeFilterForm } from './filter-form.js';
import { debounce } from './util.js';
import { inizializeAvatar } from './avatar.js';

const RENDER_DELAY = 500;

getData(initializeMarkers);
debounce(inizializeFilterForm(fetchMarkers, updateMarkers), RENDER_DELAY);
inizializeAvatar();

import { getData, fetchMarkers } from './api.mjs';
import { initializeMarkers, updateMarkers } from './markers.mjs';
import { inizializeFilterForm } from './filter-form.mjs';
import { debounce } from './util.mjs';
import { inizializeAvatar } from './avatar.mjs';

const RENDER_DELAY = 500;

getData(initializeMarkers);
debounce(inizializeFilterForm(fetchMarkers, updateMarkers), RENDER_DELAY);
inizializeAvatar();

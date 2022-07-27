import { getData, fetchMarkers } from './api.mjs';
import { initializeMarkers, updateMarkers } from './markers.mjs';
import { inizializeFilterForm } from './filter-form.mjs';

getData(initializeMarkers);
inizializeFilterForm(fetchMarkers, updateMarkers);

import lodash from 'lodash';
import * as Popper from '@popperjs/core';
import 'bootstrap';
import axios from 'axios';

window._ = lodash;
window.Popper = Popper;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;
//window.axios.defaults.baseURL = "http://localhost:8000";

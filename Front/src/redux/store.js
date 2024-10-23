import { configureStore } from '@reduxjs/toolkit';

import adsSlice from './features/ads/adsSlices';
import userSlices from './features/user/userSlices';

export default configureStore({
  reducer: {
    ads: adsSlice,
    user:userSlices
  },
});
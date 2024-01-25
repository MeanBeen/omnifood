import { call, put, takeEvery } from "redux-saga/effects";
import { getFoodsSuccess } from "../Slice/FoodSlice";
import { latestMeals } from "../../utils/constant";

function* workGetFoodsFetch() {
  yield put(getFoodsSuccess(latestMeals));
}

function* foodsSaga() {
  yield takeEvery("food/getFoodsFetch", workGetFoodsFetch);
}

export default foodsSaga;

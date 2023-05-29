import { CreateForm } from "../pages/dashboard/createChart/CreateForm";
import { render } from "../utils/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../services/redux/features/users";
import { chartsSlice } from "../services/redux/features/charts";

describe("responsive drawer", () => {
  let store;
  let wrapper: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        users: usersSlice.reducer,
        charts: chartsSlice.reducer,
      },
    });
    wrapper = render(
      <Provider store={store}>
        <CreateForm />
      </Provider>
    );
  });
  test("rendered correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

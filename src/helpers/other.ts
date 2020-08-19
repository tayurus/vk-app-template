import { history } from "src/helpers/history";
import qs from "query-string";

export const calcSlidesPerView = (parentWidth: number, slideWidth: number, slideOffset: number) => {
  return parentWidth / (slideWidth + slideOffset);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const showModal = (modalId: string, queryParams?: Record<any, any>) => {
  const {
    location: { pathname },
  } = history;
  const additionalQueryParams = queryParams ? `&${qs.stringify(queryParams)}` : "";
  history.push(`${pathname}?modal=${modalId}${additionalQueryParams}`);
};

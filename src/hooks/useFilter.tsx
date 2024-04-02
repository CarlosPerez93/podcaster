import { USEFILTER } from "./useFilter.type";

export const useFilter = ({ data, stateFilter, key }: USEFILTER) => {
  console.log(data, stateFilter);

  if (key === "title") {
    return data?.filter((item: any) => {
      return stateFilter.toString().toLowerCase() == ""
        ? item
        : item.title.label.toLowerCase().includes(stateFilter);
    });
  } else
    return data?.filter((item: any) => {
      return stateFilter == 0
        ? item
        : item["im:artist"].label.toString().includes(stateFilter);
    });
};

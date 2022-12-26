const projectId = "lduee6rc";
const assetUrl = `https://cdn.sanity.io/images/${projectId}/production/`;
export const imageUrl = (image: string) => {
  const format = image.split("-")[image.split("-").length - 1];
  image = image
    .split("-")
    .filter((item) => item !== "image" && item !== format)
    .join("-");
  image = `${image}.${format}`;
  return assetUrl + image;
};

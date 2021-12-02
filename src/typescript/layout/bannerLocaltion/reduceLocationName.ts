export const reduceLocationName = () => {
  const locationName: NodeListOf<Element> =
    document.querySelectorAll(".location-name");

  for (let item of locationName) {
    const sizeText: number = item.firstChild.nodeValue.length;
    const textContentItem: string = item.firstChild.nodeValue;

    if (sizeText >= 35) {
      item.firstChild.nodeValue = textContentItem.slice(0, 30).concat("...");
    }
  }
};

// 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

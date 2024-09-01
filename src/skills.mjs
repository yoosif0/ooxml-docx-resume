export const handleCategory = (categoryObj) => {
  let s = "";
  for (const mainSkill of Object.keys(categoryObj)) {
    if (!categoryObj[mainSkill]) {
      s += `${mainSkill}, `;
    } else {
      s += `${mainSkill} (`;
      for (const k2 of Object.keys(categoryObj[mainSkill])) {
        s += `${k2}, `;
      }
      s = s.substring(0, s.length - 2);
      s += "), ";
    }
  }
  return s.substring(0, s.length - 2);
};

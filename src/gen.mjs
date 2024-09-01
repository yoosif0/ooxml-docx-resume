import { promises as fs } from "fs";
import { header2ndPage, headerFirstPage } from "./xml/header.mjs";
import { normalSectionText } from "./xml/normalSectionText.mjs";
import { sectionHead } from "./xml/sectionHead.mjs";
import { space } from "./xml/space.mjs";
import { document } from "./xml/document.mjs";
import { load } from "js-yaml";
import { config } from "dotenv";
import { bulletPointPartialBold } from "./xml/bulletpoint.mjs";
import { handleCategory } from "./skills.mjs";
import { withRight } from "./xml/withRight.mjs";
import { WithRightPartialBold } from "./xml/withRightPartialBold.mjs";
config();

async function gen() {
  const resumeDir = process.env["RESUME_DIR"];
  const src = resumeDir + "/my_resume.yaml";
  const fileContents = await fs.readFile(src, "utf8");
  const dict = JSON.parse(JSON.stringify(load(fileContents)));

  const hfP = headerFirstPage({
    title: dict["title"],
    subtitle: `${dict["location"]} | ${dict["email"]} | ${dict["website"]}`,
  });
  const hsP = header2ndPage({
    left: dict["title"],
    middle: `${dict["email"]} | ${dict["website"]}`,
  });
  let s = "";
  s += sectionHead("OBJECTIVE");
  s += normalSectionText(dict["seeking"]);
  s += space;
  s += sectionHead("SUMMARY/ HIGHLIGHTS OF QUALIFICATIONS");
  for (const item of dict["second"]) {
    console.log("second item", item);
    s += bulletPointPartialBold("", item);
  }
  s += space;
  s += sectionHead("TECHNICAL SKILLS");
  const skillsObj = dict["skills"];
  for (const k of Object.keys(skillsObj)) {
    const categorySkills = handleCategory(skillsObj[k]);
    s += bulletPointPartialBold(k, ": " + categorySkills);
  }
  s += space;
  s += sectionHead("PROFESSIONAL EXPERIENCE");
  const workObj = dict["work"];
  for (const k of Object.keys(workObj)) {
    const y = workObj[k];
    const date = y["d"][0] + "- " + y["d"][1];
    console.log(y);
    s += withRight({ left: y["role"], right: date });
    // company details
    // company name
    let txt = k;
    // company website if exists
    if ("website" in y) {
      txt += " (" + y["website"] + ")";
    }
    txt += ", ";
    // tags if exists
    if ("tags" in y) {
      for (const item of y["tags"]) {
        txt += item + ", ";
      }
    }
    // location
    txt += y["location"];
    s += normalSectionText(txt);
    // bullet points
    for (const item of y["b"]) {
      s += bulletPointPartialBold("", item);
    }
    s += space;
  }
  s += sectionHead("OTHER PROJECTS");
  const projectsObj = dict["projects"];
  for (const k of Object.keys(projectsObj)) {
    const y = projectsObj[k];
    const date = y["d"][0] + "- " + y["d"][1];
    s += withRight({ left: k, right: date });
    // bullet points
    for (const item of y["b"]) {
      s += bulletPointPartialBold("", item);
    }
    s += space;
  }
  s += sectionHead("EDUCATION");
  const eduObj = dict["education"];
  for (const k of Object.keys(eduObj)) {
    const y = eduObj[k];
    const date = y["d"][1];
    s += WithRightPartialBold({ bold: k, normal: y["detail"], right: date });
    s += normalSectionText(y["uni"]);
    s += space;
  }

  // testimonials if exist
  if ("tm" in dict) {
    s += sectionHead("TESTIMONIALS");
    const tmObj = dict["tm"];
    for (const q of tmObj["quotes"]) {
      s += bulletPointPartialBold("", `"${q}"`);
    }
    s += normalSectionText(tmObj["last"]);
  }
  const doc = document(s);
  const file = (path, content) => ({ path, content });
  const a = [
    file(`dest/word/header2.xml`, hfP),
    file(`dest/word/header.xml`, hsP),
    file(`dest/word/document.xml`, doc),
  ];
  const promises = a.map((pw) => fs.writeFile(pw.path, pw.content));
  await Promise.all(promises);
}

(async function () {
  await gen();
})();

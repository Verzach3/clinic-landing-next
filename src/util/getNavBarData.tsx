import {FC} from 'react';
import getSupaClient from "@/util/getSupaClient";
import {Icon123} from "@tabler/icons-react";

type MockDataItem = {
  label: string;
  icon: FC<any>;
  links?: { label: string; link: string }[];
};

export type MockData = MockDataItem[];

export async function getNavBarData(gender: string): Promise<MockData> {
  if (gender === "feminine") {
    gender = "Female"
  }
  if (gender === "masculine") {
    gender = "Male"
  }
  console.log(gender)
  const articles = (await getSupaClient().from("info_articles").select("category, sub_category, slug, tags")).data
  if (!articles) {
    return [];
  }
  const navBarData: { [category: string]: { label: string; link: string }[] } = {};
  for (const article of articles) {
    if (!navBarData[article.category]) {
      navBarData[article.category] = [];
    }
    navBarData[article.category].push({label: article.sub_category, link: `/info/${article.slug}`});
  }

  // Convert NavBarData to MockData
  const unfilteredRes = Object.entries(navBarData).map(([category, links]) => ({
    label: category,
    icon: Icon123, // Placeholder icon
    links: links,
    tags: articles.filter((item) => item.category === category).map((item) => item.tags)
  }))

  const filteredRes = []
  for (const item of unfilteredRes) {
    for (const tag of item.tags) {
      if (!tag) {
        continue
      }
      if (tag.includes(gender)) {
        filteredRes.push(item)
        break
      }
    }
  }
  return filteredRes;
}
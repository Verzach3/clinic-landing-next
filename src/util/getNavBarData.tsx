import {FC} from 'react';
import getSupaClient from "@/util/getSupaClient";
import {Icon123} from "@tabler/icons-react";

type MockDataItem = {
  label: string;
  icon: FC<any>;
  links?: { label: string; link: string }[];
};

export type MockData = MockDataItem[];
export async function getNavBarData(): Promise<MockData> {
  const articles = (await getSupaClient().from("info_articles").select("category, sub_category, slug")).data
  if (!articles) {
    return [];
  }
  const navBarData: { [category: string]: { label: string; link: string }[] } = {};
  for (const article of articles) {
    if (!navBarData[article.category]) {
      navBarData[article.category] = [];
    }
    navBarData[article.category].push({ label: article.sub_category, link: `/info/${article.slug}` });
  }

  // Convert NavBarData to MockData
  return Object.entries(navBarData).map(([category, links]) => ({
    label: category,
    icon: Icon123, // Placeholder icon
    links: links,
  }));
}
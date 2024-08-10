import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import { Scene } from "../components/characters/Scene";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Info } from "../components/Info";

export default async function Home(): Promise<JSX.Element> {
  const { data } = await fetchData();

  return (
    <main className="relative h-screen w-screen bg-slate-900 flex items - center justify - center">
      <Scene className="absolute inset-0" />
      <Info data={data} />
      <Header />
      <Footer />
    </main>
  );
}

async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  if (!storyblokApi) {
    throw new Error("Storyblok API is not initialized correctly.");
  }
  const response = await storyblokApi.get(
    `cdn/stories/personalinfo`,
    sbParams,
    { cache: "no-store" },
  );
  return response.data;
}

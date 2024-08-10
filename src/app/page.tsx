import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import { Scene } from "../components/characters/Scene";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Info, InfoData } from "../components/Info";

export default async function Home(): Promise<JSX.Element> {
  const { infoData } = await fetchInfoData();

  return (
    <main className="relative h-screen w-screen bg-slate-900 flex items - center justify - center">
      <Scene className="absolute inset-0" />
      <Info data={infoData} />
      <Header />
      <Footer />
    </main>
  );
}

export async function fetchInfoData(): Promise<{ infoData: InfoData }> {
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
  return { infoData: response.data };
}

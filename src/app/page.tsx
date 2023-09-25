import dynamic from "next/dynamic";
import { Header, Footer } from "./components";
import Loading from "./loading";

const NewsFeedComponent = dynamic(() => import("./components/newsfeed"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Header />
      <NewsFeedComponent />
      <Footer />
    </>
  );
}

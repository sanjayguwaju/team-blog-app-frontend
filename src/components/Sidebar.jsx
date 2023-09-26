import Card from "./Card";
import PopularCard from "./PopularCard";
import RecentCard from "./RecentCard";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import RecentPostWidget from "./RecentPostWidget";
import TagCloud from "./TagCloud";
const Sidebar = () => {
  return (
    <>
      <PopularCard />
      <RecentCard />
      <br />
      <Categories />
      <br />
      <TagCloud />
      <br />
      <Card />
      <br />
      <RecentPostWidget />
      <br />
      <Newsletter />
      <br />
    </>
  );
};

export default Sidebar;

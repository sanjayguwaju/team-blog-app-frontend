import Card from "./Card";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import RecentPostWidget from "./RecentPostWidget";
import TagCloud from "./TagCloud";
const Sidebar = () => {
  return (
    <>
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

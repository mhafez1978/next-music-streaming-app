import Footer from "../components/Footer";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <div className="grid grid-cols-1 sm:grid-colds-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/liked.png"
              name={"Liked Songs"}
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div
          className="
          flex
          justify-between
          items-center"
        >
          <h3
            className="
          text-white
          text-xl
          font-semibold
          "
          >
            Newest Songs!
          </h3>
        </div>
        List of Songs here ...
      </div>
      <Footer />
    </div>
  );
}

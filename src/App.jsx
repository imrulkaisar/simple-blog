import Divider from "./Components/Divider";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Main from "./Components/Main";
import Blogs from "./Components/Blogs";
import Aside from "./Components/Aside";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Divider />
      </Container>
      <Main>
        <Container className="lg:flex gap-8 justify-between">
          <Blogs />
          <Aside>
            <div className="spend-time border-2 border-blue-600 text-blue-600 text-sm p-5 font-semibold text-center bg-gray-100 rounded-lg">
              Spent time on read : 177 min
            </div>
            <div className="bookmarks bg-gray-200 p-5 rounded-lg mt-5 space-y-5">
              <h4 className="font-semibold text-xl">Bookmarked Blogs: 8</h4>
              <ul className="bookmark-list space-y-3">
                <li className="bg-white p-3 text-sm">
                  <a href="">
                    Master Microsoft Power Platform and Become an In-Demand!
                  </a>
                </li>
                <li className="bg-white p-3 text-sm">
                  <a href="">
                    Master Microsoft Power Platform and Become an In-Demand!
                  </a>
                </li>
                <li className="bg-white p-3 text-sm">
                  <a href="">
                    Master Microsoft Power Platform and Become an In-Demand!
                  </a>
                </li>
                <li className="bg-white p-3 text-sm">
                  <a href="">
                    Master Microsoft Power Platform and Become an In-Demand!
                  </a>
                </li>
                <li className="bg-white p-3 text-sm">
                  <a href="">
                    Master Microsoft Power Platform and Become an In-Demand!
                  </a>
                </li>
              </ul>
            </div>
          </Aside>
        </Container>
      </Main>
    </>
  );
}

export default App;

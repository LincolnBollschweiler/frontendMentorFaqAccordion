import "./sass/style.scss";
import { footer } from "./components/footer";
import { header } from "./components/header";
import { mainContent } from "./components/mainContent";
import { mainEvents } from "./events/main";

(() => {
  $("header").html(header);
  $("main").html(mainContent);
  $("footer").html(
    footer("https://github.com/LincolnBollschweiler/frontendMentorFaqAccordion")
  );
  mainEvents();
})();

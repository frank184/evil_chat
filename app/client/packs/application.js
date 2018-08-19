// In order to re-enable Turbolinks in your project: yarn add turbolinks
import Turbolinks from "turbolinks";

// Without Sprockets, Rails would not understand Unobtrusive JavaScript
// (that includes setting method: :delete on link_to)
// unless you reinstall rails-ujs from npm: yarn add rails-ujs
import Rails from "rails-ujs";

import "./init";
import "./components/page/page";
import "./components/auth-form/auth-form";
import "./components/chat/chat";

Turbolinks.start();
Rails.start();

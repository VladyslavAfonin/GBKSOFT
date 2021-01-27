export default () => {
  const tabs = document.querySelectorAll('.tabs__item'),
    tabsContent = document.querySelectorAll('.tabcontent__item');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeTabAttr = e.target.getAttribute("data-tab");

      for (var j = 0; j < tabs.length; j++) {
        var contentAttr = tabsContent[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabs[j].classList.add("active");
          tabsContent[j].classList.add("active");
        } else {
          tabs[j].classList.remove("active");
          tabsContent[j].classList.remove("active");
        }
      };
    });
  }
}
